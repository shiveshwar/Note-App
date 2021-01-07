
import React , { Component } from 'react';
import { connect } from 'react-redux';
import 'bootstrap/dist/css/bootstrap.css';
import axios from 'axios';
import {
  Card, Button, CardBody,
  CardTitle, Input, Alert, Table
} from 'reactstrap';
import './NoteApp.css';

import { viewNote, searchUserByIdByNote } from "../actions/note";
import { getUsers } from '../actions/user';
class NoteApp extends Component {

  static propTypes = {

  };

  constructor(props) {
    console.log('-------constructor---------------');
    super(props);

    this.state = {
      name: '',
      isNoteAdd: false,
      users: [],
      notes: [],
      userId: '',
      note: '',
      keyword: '',
      isSave: false,
      error: '',
      search: '',
      errorMessage: [],
      searchUserId:'',
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleAddNote = this.handleAddNote.bind(this);
    this.handleSearch = this.handleSearch.bind(this);
    
  }

  // static getDerivedStateFromProps(props, state) {
  //   console.log('-------getDerivedStateFromProps---------------');
  //   console.log('-------props---------------', props.notes);
  //   return {notes: props.notes };
  // }

  static getDerivedStateFromProps(nextProps, prevState) {
    
    console.log('-------getDerivedStateFromProps---------------');
    console.log('-------nextProps---------------',nextProps.noteReducer.notes);
    console.log('-------prevState---------------',prevState);
    // do things with nextProps.someProp and prevState.cachedSomeProp
    return {
      notes: nextProps.noteReducer.notes,
      users: nextProps.userReducer.users
      // ... other derived state properties
    };
    
  }

 
  componentDidMount() {
    console.log('-------componentDidMount---------------');

    this.props.viewNote();
    this.props.getUsers();
    console.log('-------after----viewNote--------');
    // this.props.viewNote(viewNote()); // << use it here

    // axios.get(`http://localhost:3000/users`)
    //   .then(res => {
    //     const users = res.data;
    //     this.setState({ users });
    //   });

    // axios.get(`http://localhost:3000/notes`)
    //   .then(res => {
    //     const notes = res.data;
    //     console.log('-------componentDidMount------from-----axios----', notes);
    //     this.setState({ notes });
    // });



  }

 
  

  handleInputChange(event) {
    event.preventDefault();
    console.log("event.target", event.target.value);
    console.log("event.target.name", event.target.name);

    const name = event.target.name;
    const value = event.target.value;

    this.setState({
      [name]: value,
    });
  }

  handleSubmit = event => {
    event.preventDefault();

    this.setState({
      isSave: false,
    });

    const valid = this.validation();
    console.log('-------handleSubmit---------------');

    if(valid){
      axios.post(`http://localhost:3000/notes`, {

        note: this.state.note,
        keyword: this.state.keyword,
        userId: this.state.userId
  
      }).then(res => {
        if (res.data) {
          this.setState({
            isSave: true,
            note: '',
            keyword: '',
            userId: '',
            isNoteAdd: false,
            searchUserId:'',
            search: '',
          });
        }
      })
    }
  }

  validation() {
    let errorMessage = [];
    let valid = false;

    if (this.state.userId === "") {
      errorMessage.push("please select user");
    } else if (this.state.note === "") {
      errorMessage.push("note cannot be blank");
    } else if (this.state.keyword === "") {
      errorMessage.push("keyword cannot be blank");
    } else {
      valid = true;
    }

    this.setState({ errorMessage });
    return valid;
  }

  handleAddNote(event) {
    event.preventDefault();

    this.setState({
      isNoteAdd: true,
    });
  }

  handleSearch(event) {
    event.preventDefault();

    // let url = `http://localhost:3000/notes/user/`;
    let userId = this.state.searchUserId;
    let keyword = this.state.search;
    let url = `http://localhost:3000/notes/user/${userId}/${keyword}`;
   

    // if(userId && keyword){
    //     url = `http://localhost:3000/notes/user/${userId}/${keyword}`;
    // }else if(userId){
    //     url = `http://localhost:3000/notes/user/${userId}`;
    // }else if(keyword){
    //     url = `http://localhost:3000/notes/user/${keyword}`;
    // }

    console.log("-----url---------", url);
    this.props.searchUserByIdByNote(url);

    // axios.get(url)
    // .then(res => {
    //   const notes = res.data;
    //   this.setState({ notes });
    // });
    
  }

  render() {
    console.log('-------thia is state', this.state.notes);
    console.log('---------render()---------------', this.state.notes);

    let users;
    let listNotes;

    if (this.state.users) {
      users = this.state.users.map((value, index) =>
        <option key={`userId ${value._id}`} value={value._id}>{value.username}</option>
      );
    }

    if (this.state.notes) {

      listNotes = this.state.notes.map((value, index) =>
        <tr key={index}>
          <th scope="row">{index}</th>
          <td>{value.userId}</td>
          <td>{value.note}</td>
          <td>{value.keyword}</td>
        </tr>
      );
    }

    return (
      <div>
        <h2 style={{ marginTop: '10px' }}>Simple Note App</h2>

        {!this.state.isNoteAdd &&
          <Card>
            <CardBody>
              {this.state.isSave &&
                <Alert color="success">
                  Note added successfully
              </Alert>
              }

              <h5 style={{ marginTop: '5px' }}>User List</h5>

              <div style={{ display: 'inline-block' }}>
                <Input type="text"
                  name="search"
                  id="search"
                  value={this.state.search}
                  onChange={this.handleInputChange}
                  placeholder="Search by keword"
                  style={{ display: 'inline-block', width:'170px' }}
                />

                <Input type="select"
                name="searchUserId"
                id="searchUserId"
                value={this.state.searchUserId}
                onChange={this.handleInputChange}
                style={{ display: 'inline-block', width: '150px', marginLeft: '10px'}}
              >
                <option value="">Select user</option>
                {users}
              </Input>

                <Button color="success" size="sm" style={{ marginLeft: '20px' }} onClick={this.handleSearch}>Search Note</Button>{' '}
                <Button color="danger" size="sm" style={{ marginLeft: '700px' }} onClick={this.handleAddNote}>Add Note</Button>{' '}
              </div>
              <Table style={{ marginTop: '10px' }} >
                <thead>
                  <tr>
                    <th>Sr</th>
                    <th>User Id</th>
                    <th>Note</th>
                    <th>Keyword</th>
                  </tr>
                </thead>
                <tbody>
                  {listNotes}
                </tbody>
              </Table>
            </CardBody>
          </Card>
        }
        {this.state.isNoteAdd &&
          <Card>
            <CardBody>

              {this.state.errorMessage.length > 0 &&
                <Alert color="danger">
                  {this.state.errorMessage.map(error =>
                    <span>{error}</span>
                  )}
                </Alert>
              }
              <CardTitle>Add Note</CardTitle>

              <Input type="select"
                name="userId"
                id="userId"
                value={this.state.userId}
                onChange={this.handleInputChange}
                style={{ marginBottom: '10px', width: "20%" }}
              >
                <option value="">Select user</option>
                {users}
              </Input>
              <Input type="textarea" style={{ width: "20%" }} value={this.state.note} placeholder="Note" name="note" id="note" onChange={this.handleInputChange} />
              <Input type="textarea" style={{ width: "20%" }} value={this.state.keyword} placeholder="keyword" name="keyword" id="keyword" onChange={this.handleInputChange} />
              <Button color="success" style={{ marginTop: '10px' }} onClick={this.handleSubmit}>Save</Button>{' '}
            </CardBody>
          </Card>
        }
      </div>
    );
  }
}

const mapStateToProps = state => ({
  ...state
});
const mapDispatchToProps = dispatch => ({
  viewNote: () => dispatch(viewNote()),
  getUsers : () => dispatch(getUsers()),
  searchUserByIdByNote : () => dispatch(searchUserByIdByNote())
});


export default connect(mapStateToProps, mapDispatchToProps)(NoteApp);
// export default NoteApp;