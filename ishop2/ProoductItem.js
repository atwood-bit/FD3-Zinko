var ProductItem = React.createClass({
    displayName: 'ProductItem',

    propTypes: {
        product: React.PropTypes.shape({
            name: React.PropTypes.string.isRequired,
            code: React.PropTypes.number.isRequired,
            price: React.PropTypes.number.isRequired,
            url: React.PropTypes.string.isRequired,
            count: React.PropTypes.number.isRequired,
        }),
        selectedItem: React.PropTypes.number,
        cbSelected: React.PropTypes.func.isRequired,
        cbDelete: React.PropTypes.func.isRequired,
      },

    itemRowClick: function(){
        this.props.cbSelected(this.props.product.code);
    },

    deleteItem: function(EO){
        EO.stopPropagation();
        let res = confirm("Вы хотите удалить элемент?");
        if (res){
            this.props.cbDelete(this.props.product);
        }
    },

    render: function(){
        return React.DOM.div({key:this.props.product.code, 
            className:(this.props.selectedItem==this.props.product.code) ? 'Product SelectedProduct' : 'Product',
            onClick: this.itemRowClick},
            React.DOM.div({className:'Url'}, 
              React.createElement('img', {className:'Image', src:this.props.product.url, alt:this.props.product.name})
            ),
            React.DOM.div({className:'Description'}, 
              React.DOM.h4({className:'Name'},this.props.product.name),
              React.DOM.p({className:'Count'},'Count: ' + this.props.product.count),
              React.DOM.p({className:'Price'},'Price: ' + this.props.product.price + '$'),
            ),
            React.DOM.div({className: 'Control'}, 
                React.DOM.input({type:'button', value: 'Delete', onClick: this.deleteItem})),
          );
    },
});