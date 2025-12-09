// import { createSlice } from "@reduxjs/toolkit";
// import { Films } from "../../ApiClone/DatabaseFilms/Films"
// import axios from "axios";
// const status = [
//     ...new Set(
//         Films.filter((e) => e.status || (e.formats && e.formats.includes("IMAX")))
//     )
// ];
// { console.log(status) }

// export const fetchFilms = createAsyncThunk(
//     "films/fetchFilms",
//     async () => {
//         const response = await axios.get("https://example.com/api/films");
//         // axios tự động parse JSON -> data chính là object/array
//         return response.data;
//     }
// );
// export const couterSlice = createSlice({
//     name: "SetPath",
//     initialState: {
//         value: status[0],
//         films: [],
//         loading: false,
//         error: null
//     },
//     reducers: {
//         setTab: (state, action) => {
//             state.value = action.payload;
//         },
//         extraReducers: (builder) => {
//             builder
//                 .addCase(fetchFilms.pending, (state) => {
//                     state.loading = true;
//                     state.error = null;
//                 })
//                 .addCase(fetchFilms.fulfilled, (state, action) => {
//                     state.loading = false;
//                     // Lọc phim theo status hoặc IMAX
//                     state.films = action.payload.filter(
//                         (e) => e.status || (e.formats && e.formats.includes("IMAX"))
//                     );
//                 })
//                 .addCase(fetchFilms.rejected, (state, action) => {
//                     state.loading = false;
//                     state.error = action.error.message;
//                 });
//         }
//     }
// })
// //
// // FilmsList.jsx
// // import React, { useEffect } from "react";
// // import { useDispatch, useSelector } from "react-redux";
// // import { fetchFilms, setTab } from "./counterSlice";

// // export default function FilmsList() {
// //   const dispatch = useDispatch();
// //   const { films, loading, error, value } = useSelector((state) => state.SetPath);

// //   useEffect(() => {
// //     dispatch(fetchFilms()); // gọi API khi component mount
// //   }, [dispatch]);

// //   if (loading) return <p>Đang tải phim...</p>;
// //   if (error) return <p>Lỗi: {error}</p>;

// //   return (
// //     <div>
// //       <h2>Danh sách phim ({value})</h2>

// //       <button onClick={() => dispatch(setTab("now_showing"))}>
// //         Now Showing
// //       </button>
// //       <button onClick={() => dispatch(setTab("coming_soon"))}>
// //         Coming Soon
// //       </button>

// //       <ul>
// //         {films
// //           .filter((film) => !value || film.status === value) // lọc theo tab
// //           .map((film, index) => (
// //             <li key={index}>{film.title} - {film.status}</li>
// //           ))}
// //       </ul>
// //     </div>
// //   );
// // }
