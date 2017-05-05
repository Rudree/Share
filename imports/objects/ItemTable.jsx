import React, { Component, PropTypes } from 'react';
import { ItemCollection } from '../collections/items.js';
import { Input, Button, Checkbox, Icon, Table } from 'semantic-ui-react';

export default class ItemTable extends Component {

  UpdateAvailable()
  {
    ItemCollection.update(this.props.item._id, {
      $set: { Status: 'Available' },
    });
  }

  UpdateNotAvailable()
  {
    ItemCollection.update(this.props.item._id, {
      $set: { Status: 'Not-Available' },
    });
  }

  removeItem() {
    ItemCollection.remove(this.props.item._id);
  }

  render() {
    return (
      <Table.Body>
        <Table.Row>
          <Table.Cell collapsing>
            <Button.Group vertical>
            <Button color='red' icon labelPosition='left' size='small' onClick={this.removeItem.bind(this)}>
              <Icon name='remove circle outline' /> Remove Item
            </Button>
            <Button color='green' icon labelPosition='left' size='small' onClick={this.UpdateAvailable.bind(this)}>
              <Icon name='checkmark' /> Mark as available
            </Button>
            <Button color='yellow' icon labelPosition='left' size='small' onClick={this.UpdateNotAvailable.bind(this)}>
              <Icon name='minus circle' /> Mark as un-available
            </Button>
            </Button.Group>
          </Table.Cell>
          <Table.Cell>{this.props.item.Name}</Table.Cell>
          <Table.Cell>{this.props.item.Price}</Table.Cell>
          <Table.Cell>{this.props.item.Owner}</Table.Cell>
          <Table.Cell>{this.props.item.Condition}</Table.Cell>
          <Table.Cell>{this.props.item.Status}</Table.Cell>
          <Table.Cell>{this.props.item.Borrowed}</Table.Cell>
          <Table.Cell>{this.props.item.Rating}</Table.Cell>
          <Table.Cell>{this.props.item.Category}</Table.Cell>
          <Table.Cell>{this.props.item.Location}</Table.Cell>
        </Table.Row>
      </Table.Body>
    );
  }
}

