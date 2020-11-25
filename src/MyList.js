import React, {Component} from 'react'
import './MyList.css';
import ListItem from './ListItem'

// define the MyList component
class MyList extends Component {

  state = {
    toDoItemArray: this.props.theList,
    newItem: ""
  }

  newItemChange = (e) => {
    this.setState({
      newItem: e.target.value
    })
  }

  addItem = (e) => {
    console.log('trying to add')
    e.preventDefault()
    this.setState({
      toDoItemArray: [...this.state.toDoItemArray, this.state.newItem],
      newItem: ""
    })
    console.log(this.state.toDoItemArray)
  }  

  clearList = (e) => {
    console.log('Clearing list')
    this.setState({
      toDoItemArray: []
    })
  }

  render(){
    // console.log(this.state.toDoItemArray)
    const toDoItems = this.state.toDoItemArray.map((toDoItem, i)=>{
      // return <ListItem doThis={toDoItem} key={i} />
      return <li key={i}>{toDoItem}</li>
    })
    return(
      <div>
        <h1> Things to do today:</h1>
        <ul>
          {toDoItems}
        </ul>
        <form>
          <input className="input" type="text"
          placeholder="Type a new to-do item here"
          onChange={(e) => this.newItemChange(e)}
          value={this.state.newItem}
          />
          <button className="btn" onClick={(e) => this.addItem(e)}>Add it!</button>
        </form>
        <button className="btn" onClick={(e)=>this.clearList(e)}>Finished the List!</button>
      </div>
    )
  }
}

export default MyList;
