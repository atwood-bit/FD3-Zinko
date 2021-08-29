var ProductsBlock = React.createClass({

    displayName: 'ProductsBlock',
  
    getDefaultProps: function() {
      return { name: "Магазин без названия" }
    },
  
    render: function() {

      var products = this.props.products.map(product => 
        React.DOM.div({key:product.code,className:'Product'},
            React.DOM.span({className:'Code'}, product.code),
            React.DOM.div({className:'Name'},product.name),
            React.DOM.div({className:'Count'},product.count),
            React.DOM.div({className:'Price'},product.price),
            React.DOM.div({className:'URL'}, product.url),
          )
      );

      return React.DOM.div( {className:'ProductsBlock'}, 
        React.DOM.h1( {className:'Name'}, this.props.name ),
        React.DOM.div( {className:'Products'}, products ),
      );
    },
  });