var FilterBlock = React.createClass({

    displayName: 'FilterBlock',
  
    propTypes: {
        strings:React.PropTypes.arrayOf(
          React.PropTypes.string
        ).isRequired,
      },
  
    getInitialState: function() {
        return { 
          currList:this.props.strings,
          isOrder:false,
          searchString:'',
        };
    },  

    checkboxClicked: function(EO){
        this.setState({ isOrder: EO.target.checked });
    },

    searchChanged: function(EO){
        this.setState({ searchString: EO.target.value });
    },

    clear: function(){
        this.setState({ searchString: '' });
        this.setState({ isOrder: false });
    },

    render: function() {
        var cloneArr = this.state.currList.map(x => x);
        if (this.state.isOrder){
            cloneArr = cloneArr.sort();
        }
        var items = cloneArr.map((item, index) => {
          if (item.includes(this.state.searchString)){
            return React.DOM.span({key:index, className: 'item'}, item);
          }
      } 
      );

      return React.DOM.div( {className:'FilterBlock'}, 
        React.DOM.div( {className:'HeadFilter'}, 
            React.DOM.input({type:'checkbox', name:'OrderCheckBox',
                             checked:this.state.isOrder, onClick:this.checkboxClicked}),
            React.DOM.input({type:'text', name:'searchfield', className:'SearchField', value: this.state.searchString,
                             onChange:this.searchChanged}),
            React.DOM.input({type:'button', value:'Сброс', onClick:this.clear})
        ),
        React.DOM.div( {className:'Items'}, items ),
      );
    },
  });