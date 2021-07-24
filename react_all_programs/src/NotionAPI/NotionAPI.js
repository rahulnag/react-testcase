import React, { Component } from 'react';
import PropTypes from 'prop-types';


const { Client } = require('@notionhq/client');

const notion = new Client({ auth: process.env.NOTION_API_KEY });


class NotionAPI extends Component {
    constructor(props) {
        super(props);
        console.log("..........")
    }


    componentDidMount() {
        (async () => {
            const databaseId = 'secret_972JP9RGvDc8nrHUte5EtxXx1o0OPgpGj9S3dbLI72Q';
            const response = await notion.databases.retrieve({ database_id: databaseId });
            console.log(response);
          })();
    }

    render() {
        return (
            <div>

            </div>
        );
    }
}


export default NotionAPI;