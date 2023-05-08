// import React, { useState } from 'react'
// import ReactPaginate from 'react-paginate';
// import axios from "axios"
// const Pagination = () => {
//     const [page, setpage] = useState()
//     setpage=(data) => {
//         console.log(data.selected)
//     };
//     const fetchdata = asyne () => {
//          await axios.get(`https://jsonplaceholder.typicode.com/comments?_page=${page}`)
//     }
//   return (
//     <ReactPaginate
//     containerClassName='pagination justify-content-en'
//     pageClassName="page-item"
//     pageLinkClassName="page-link"
//         breakLabel="..."
//         nextLabel="next >"
//         onPageChange={handlePageClick}
//         pageRangeDisplayed={5}
//         pageCount={20}
//         previousLabel="< previous"
//         breakClassName="page-item"
//         previousClassName="page-item"
//         previousLinkClassName='page-link'
//         nextClassName="page-item"
//        nextLinkClassName='page-link'
//         breakLinkClassName="page-link"
//         renderOnZeroPageCount={null}
//         activeClassName="active"
//       />
//   )
// }

// export default Pagination