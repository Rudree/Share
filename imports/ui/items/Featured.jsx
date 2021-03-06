import React, { Component } from 'react';
import { Modal, Popup, Divider, Label, Accordion, Message, Grid, Menu, Segment, Header, Card, Icon, Image, Input, Button, List, Item, ItemContent } from 'semantic-ui-react';
import { Router, Route, IndexRoute, hashHistory } from 'react-router';
import Dropzone from 'react-dropzone';
import request from 'superagent';
import NotFoundPage from '../NotFoundPage.jsx';
import { ItemCollection } from '../../collections/items.js';
import ItemForm from './Form.jsx';

function StatusColor(props) {
  const stat = props.stat;
  const text = props.text;
    if (stat == 'Not-Available') {
    return <Label  color='red'>{text}</Label>;
  }
  if (stat == 'Available') {
    return <Label  color='green'>{text}</Label>;
  }

  return <Label  color='yellow'>{text}</Label>
}

export default class extends Component {
    constructor(props) {
        super(props);
        this.state = {
            error: null,
            open: false
        };
    };

    render() {
        let { error } = this.state;
        let { item } = this.props;
        let id = this.props.item._id;
        console.log("state>>", this.state);
        console.log("props>>", this.props);
        console.log("id>>", id);
        //console.log("user>>", user);
        return (

            <Card>
                <Popup position='bottom right'
                    trigger={<a href={`#/items/${item._id}`}>
                        <Image fluid src={item.imageUrl} /></a>}
                    content={item.owner + "'s item"}
                    basic />
                <Card.Content>
                    <Icon name='registered' />
                    <strong>{item.name}</strong>
                    <Popup position='bottom right'
                        trigger={<Icon color="blue" name="marker" size="big" />}
                        content={item.location}
                        basic
                    />
                    <StatusColor stat={item.status} text={item.status}/>
                </Card.Content>
            </Card>
        )
    }
}
