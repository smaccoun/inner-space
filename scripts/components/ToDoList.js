import React from 'react';

var Rebase = require('re-base');
var base = Rebase.createClass('https://project-8672031736751064723.firebaseio.com/');

var ToDoList = React.createClass({

  getInitialState : function() {
    return {
      notes : {},
      isWritingNote : false
    }
  },

  componentDidMount : function() {
    base.syncState('/notes', {
      context : this,
      state : 'notes'
    });
  },

  renderNotes : function(key, val) {
    var note = this.state.notes[key];
    return (
      <Note note = {note} removeNote = {this.removeNote.bind(null, key)}/>
    );
  },

  setIsWritingNote : function(event) {
    event.preventDefault();
    this.setState({ isWritingNote : true});
  },

  showNoteTextArea : function(){


    if (this.state.isWritingNote){
       return (
          <form ref="noteForm" onSubmit={this.addNote}>
            <textarea type="text" ref="desc" placeholder="Desc"></textarea>
            <button type="submit"><i className="fa fa-map-pin" /></button>
          </form>
      );
    };

    return ( <div></div>);

  },

  addNote : function(event) {
    event.preventDefault();

    var noteText = this.refs.desc.value;
    var newNote = {
        comment3 : {
          text : noteText
        }
    };
    var currentNotes = this.state.notes;
    var timestamp = (new Date()).getTime();
    currentNotes[timestamp] = {text : noteText};

    this.setState({ notes : currentNotes, isWritingNote : false });

    this.refs.noteForm.reset();

  },

  removeNote : function(key) {
    this.state.notes[key] = null;
    this.setState({notes : this.state.notes});
  },

  render: function() {
    return (

      <div id="todo_list" className="col-md-offset-1 col-md-3 col-sm-3 col-xs-7">
        <div className="x_panel">
          <div className="x_title">
            <h2>Notes</h2>
            <ul className="nav navbar-right panel_toolbox">
              <li>
                <form onSubmit={this.setIsWritingNote}>
                  <button><i className="fa fa-pencil-square-o" /></button>
                </form>
              </li>
              <li><a className="collapse-link"><i className="fa fa-chevron-up" /></a>
              </li>
              <li className="dropdown">
                <a href="#" className="dropdown-toggle" data-toggle="dropdown" role="button" aria-expanded="false"><i className="fa fa-wrench" /></a>
                <ul className="dropdown-menu" role="menu">
                  <li><a href="#">Settings 1</a>
                  </li>
                  <li><a href="#">Settings 2</a>
                  </li>
                </ul>
              </li>
              <li><a className="close-link"><i className="fa fa-close" /></a>
              </li>
            </ul>
            <div className="clearfix" />
          </div>
          <div className="x_content">
            <div>
              <ul className="to_do">
                {this.showNoteTextArea()}
                {Object.keys(this.state.notes).reverse().map(this.renderNotes)}
              </ul>
            </div>
          </div>
        </div>
      </div>
    );
  }
});

var Note = React.createClass({

  render : function(){
    var note = this.props.note;

    return (
      <li>
        <div className="note_content">
          {note.text} 
        </div>
        <div className="note_tools">
          <ul>
              <li>
                <a className="pull-right" onClick={this.props.removeNote}>
                  <i className="fa fa-trash"/>
                </a>
              </li>
            </ul>
        </div>
      </li>
    );
  }

});

export default ToDoList;
