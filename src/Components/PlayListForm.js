import React, {Component} from 'react';

class PlayListForm extends Component {
  constructor(props) {
    super(props)

    this.handleUserNameChange = this.handleUserNameChange.bind(this);
    this.handleSongArtistChange = this.handleSongArtistChange.bind(this);
    this.handleSongTitleChange = this.handleSongTitleChange.bind(this);
    this.handleSongNotesChange = this.handleSongNotesChange.bind(this);
    this.addToList = this.addToList.bind(this);

    this.state = {
      userName: '',
      songArtist: '',
      songTitle: '',
      songNotes: ''
    };
  }

  handleUserNameChange(event) {
    this.setState({userName: event.target.value});
  }
  handleSongArtistChange(event) {
    this.setState({songArtist: event.target.value});
  }
  handleSongTitleChange(event) {
    this.setState({songTitle: event.target.value});
  }
  handleSongNotesChange(event) {
    this.setState({songNotes: event.target.value});
  }


  addToList = (e) => {
      e.preventDefault();
      this.setState({
        userName: e.target.value,
        songTitle: e.target.value,
        songArtist: e.target.value,
        songNotes: e.target.value
      });
      let listItem = JSON.stringify(this.state);

      fetch("https://tiny-lasagna-server.herokuapp.com/collections/playlisting", {
        method: "POST",
        body: listItem,
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
      }
    })
    .then(response => {
      console.log(response, "yay");
    })
    .catch(err => {
      console.log(err, "boo!");
    });
    this.setState({
      userName: '',
      songNotes: '',
      songArtist: '',
      songTitle:''
    });
  };

  render() {
   return (
     <div className="col-lg">
       <div className="formTitle">
         <h2>Tell us your favorite song!</h2>
       </div>
       <form>
         <label>
           User Name:
           <input
             className="textArea"
             onChange={this.handleUserNameChange}
             userName="username"
             type="text"
             value={this.state.userName}
             placeholder="User Name or Name"
           />
         </label>
         <br />
         <label>
           Artist/Band/Group:
           <input
             className="textArea"
             onChange={this.handleSongArtistChange}
             songArtist="songArtist"
             type="text"
             value={this.state.songArtist}
             placeholder="Artist, Band, or Group Name"
           />
         </label>
         <br />
         <label>
           Song Title:
           <input
             className="textArea"
             onChange={this.handleSongTitleChange}
             songTitle="songTitle"
             type="text"
             value={this.state.songTitle}
             placeholder="The Song Title"
           />
         </label>
         <br />
         <label>
           Notes about the song:
           <input
             className="songNotesText"
             onChange={this.handleSongNotesChange}
             songNotes="songNotes"
             type="text"
             value={this.state.songNotes}
             placeholder="What are your thoughts on the song?"
           />
         </label>
         <br />
         <div className="submitButton">
           <input
             type="submit" value="Submit"
           />
           </div>
       </form>
     </div>
   );
 }
}

export default PlayListForm;
