/** @jsx React.DOM */
var React = require('react');
var Button = require('react-bootstrap/Button');
var Hello = React.createClass({
    render: function() {
        return <div>Hello {this.props.name}</div>;
    }
});

React.renderComponent(<Button bsStyle="danger">Danger</Button>, document.getElementById('example'));
