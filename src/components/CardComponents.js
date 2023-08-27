import React from "react";
import { useState, useEffect } from "react"
import axios from 'axios';
import Button from "react-bootstrap/Button"
import Swal from "sweetalert2";
// import withReactContent from "sweetalert2-react-content";

// const MySwal = withReactContent(Swal);

export default function Card({book}) {
    const [show,setShow]=useState(false);
    const [bookItem,setItem]=useState();

    const handleSaveBook = (item, img) => {
        const data = {
            bookId: item.id,
            title: item.volumeInfo.title,
            authors: item.volumeInfo.authors,
            pic: img
        }
        axios.post('http://localhost:3001/book/create' , data)
        .then(res => {
            if(res.status == 200) {
                Swal.fire(
                    'Success!',
                    'Books on list!',
                    'success'
                )
                // alert('Book saved!')
            }
            else Promise.reject()
        })
        .catch(err => showAlert(err))
      };

      
        const showAlert = (err) => {
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Something went wrong!',
            })
        }


    return (
        <div className="card">
            

            <div className="card-body">
            {
                book.map((item) => {
                    let thumbnail=item.volumeInfo.imageLinks && item.volumeInfo.imageLinks.smallThumbnail;
                    let amount=item.saleInfo.listPrice && item.saleInfo.listPrice.amount;
                    if(thumbnail!= undefined && amount !=undefined)
                    {
                        return (
                            <>
                            <div className="card" onClick={()=>{setShow(true);setItem(item)}}>
                                <img src={thumbnail} alt="" />
                                <div className="bottom">
                                    <h3 className="title">{item.volumeInfo.title}</h3>
                                    <p className="authors">{item.volumeInfo.authors} </p>
                                    <p className="averageRating">{item.averageRating}</p>
                                </div>
                                <Button type="button" onClick={()=>handleSaveBook(item, thumbnail)} >Add Cart</Button>
                            </div>
                            
                            </>
                        )
                    }
                    
                })
            }

            </div>
        </div>
    )
}