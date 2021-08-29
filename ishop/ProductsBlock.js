var ProductsBlock = React.createClass({

    displayName: 'ProductsBlock',
  
    getDefaultProps: function() {
      return { name: "Магазин без названия" }
    },
  
    render: function() {
      var products = this.props.products.map(product => 
        React.DOM.div({key:product.code,className:'Product'},
            React.DOM.div({className:'Url'}, 
              React.createElement('img', {className:'Image', src:product.url, alt:product.name})
            ),
            React.DOM.div({className:'Description'}, 
              React.DOM.h4({className:'Name'},product.name),
              React.DOM.p({className:'Count'},'Count: ' + product.count),
              React.DOM.p({className:'Price'},'Price: ' + product.price + '$'),
            ),
          )
      );

      return React.DOM.div( {className:'ProductsBlock'}, 
        React.DOM.h1( {className:'Name'}, this.props.name ),
        React.DOM.div( {className:'Products'}, products ),
      );
    },
  });