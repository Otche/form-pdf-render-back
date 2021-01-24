import express = require('express');
import React, { ReactElement } from "react";
import {MyDocument}  from './pdf-react-render'
import ReactPDF from '@react-pdf/renderer';
const app = express();


app.get('/', async (request, response) => {
    const firstname= request.query.firstname as string;
    const lastname= request.query.lastname as string;
    const doc =  React.createElement(MyDocument,{firstname: firstname, lastname : lastname});
    const pdfstream = (await ReactPDF.renderToStream(doc as ReactElement)); 
    console.log("111") 
    pdfstream.pipe(response);
    pdfstream.on('end',() => {
        response.end();
    });

})
app.listen(process.env.PORT || 5000);