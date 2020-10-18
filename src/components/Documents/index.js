import React, { Component } from 'react';
import { getDocuments } from "../../service/network";
import {
  Wrap,
  List,
  Document,
} from './styled';
import Loader from "../Loader";
import pdfFile from '../../images/pdfFile.svg';

class Documents extends Component {
  componentDidMount() {
    this.props.getDocuments()
  }

  getLink = (item) => {
    if (item.url) {
      return item.url;
    } else {
      return `https://myvolley.ru/servlet/report?id=${item.id}&type=${item.type}`
    }
  }

  render() {
    const {
      documentLoad,
      documents,
    } = this.props;


    if (documentLoad) {
      return (
        <Wrap>
          <Loader />;
        </Wrap>
      )
    }

    return (
      <Wrap>
        <List>
          {documents.length > 0 && documents.map((item, index) =>
            <Document href={this.getLink(item)} key={item.id}>
              <span>{item.formattedDate}</span>
              <img src={pdfFile} alt='pdf' />
              <p>{item.title}</p>
            </Document>
          )}
        </List>
      </Wrap>
    )
  }
}

export default Documents;
