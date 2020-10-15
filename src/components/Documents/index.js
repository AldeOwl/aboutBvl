import React, { Component } from 'react';
import { getDocuments } from "../../service/network";
import {
  Wrap,
  List,
  Document,
} from './styled';
import Loader from "../Spinner/loader";
import pdfFile from '../../images/pdfFile.svg';

class Documents extends Component {
  state = {
    documents: [],
    loading: true,
  }

  componentDidMount() {
    getDocuments()
      .then(res => this.setState({ documents: res.sort(this.sortByDate), loading: false }));
  }

  sortByDate = (a, b) => {
    const dateX = a.date ? Date.parse(a.date) : 0;
    const dateY = b.date ? Date.parse(b.date) : 0;
    return dateY - dateX;
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
      loading,
      documents,
    } = this.state;


    if (loading) {
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
