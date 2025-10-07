import React, { Suspense, useEffect, useState } from 'react';
import Book from '../Book/Book';

const Books = ({data}) => {
    const [allBooks,setAllBooks]=useState([]);
    // useEffect(()=>{
    //     fetch("booksData.json")
    //     .then(res =>res.json())
    //     .then(data=>{
    //         // console.log(data)
    //         setAllBooks(data)
    //     })
    // },[]);

    //step-2

    // const bookPromise =fetch(./booksData.json).then(res=>res.json)
    //suspense er bitor book take pathabo,than tar bitor bookPromise props hisabe pathabo than book er bitor giye distructuring vabe booksPromise nibo 
    return (
        <div>
            <h1 className='text-3xl text-center p-6'>Hello ami books </h1>
            <Suspense fallback={<span>Loadding....</span>}>

             <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5 ">
                  {
                data.map((singleBook) => <Book key={singleBook.bookId} singleBook={singleBook}></Book>)
               }
             </div>

            </Suspense>

     
        </div>
    );
};

export default Books;