var Shop = React.createClass({

    displayName: 'Shop',
  
    propTypes: {
      products: React.PropTypes.arrayOf(
        React.PropTypes.shape({
          name: React.PropTypes.string.isRequired,
          code: React.PropTypes.number.isRequired,
          price: React.PropTypes.number.isRequired,
          url: React.PropTypes.string.isRequired,
          count: React.PropTypes.number.isRequired,
        })
      ),
      name: React.PropTypes.string,
    },

    getInitialState: function() {
      return { 
        selectedProduct: null,
        productList: this.props.products,
      };
    }, 

    getDefaultProps: function() {
      return { name: "Магазин без названия" }
    },
  
    itemSelected: function(code){
      this.setState({ selectedProduct: code });
    },

    deleteItem: function(product){
      let index = this.state.productList.indexOf(product);
      let copyProductsList = this.state.productList.map(x => x);
      copyProductsList.splice(index, 1);
      this.setState({ productList: copyProductsList });
    },

    render: function() {
      var products = this.state.productList.map(product => 
        React.createElement(Product, {key: product.code, product, selectedProduct: this.state.selectedProduct,
                            cbSelected: this.itemSelected, cbDelete: this.deleteItem}),
      );

      return React.DOM.div( {className:'Shop'}, 
        React.DOM.h1( {className:'Name'}, this.props.name ),
        React.DOM.div( {className:'Products'}, products ),
      );
    },
  });