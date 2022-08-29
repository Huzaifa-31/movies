import React from "react";
import DeletePopup from "./components/DeletePopup";
import Form from "./components/Form";
import AddForm from "./components/AddForm";
// import Example from "./components/ReactBootstrapPop";
// import DeletePopup from "./components/DeletePopup";
function App(props) {
  const [movieData, setMovieData] = React.useState([]);
  const [selectedGenre, setSelectedGenre] = React.useState("All Movies");
  const [selectedPage, setSelectedPage] = React.useState(1);
  const [selectTableHeading, setSelectTableHeading] = React.useState("asc");
  //popus
  const [isOpen, setOpen] = React.useState(false);
  const [isOpenForm, setOpenForm] = React.useState(false);
  const [isOpenAddForm, setOpenAddForm] = React.useState(false);
  ///
  const [searchValue, setSearchValue] = React.useState("");
  const [isDeleteId, setDeleteId] = React.useState(null);
  // item.Title.toLowerCase().includes(handelSearch)
  const pageSize = 4;

  React.useEffect(() => {
    console.log("movieData", movieData);
  });

  //search
  const handelSearch = async (e) => {
    e.preventDefault();
    setMovieData(searchValue);
  };

  //fetching Data
  const fetchData = async () => {
    const response = await fetch("movies.json");
    const userData = await response.json();
    setMovieData(userData);
  };

  //To fetch the data and render it when ever refresh
  React.useEffect(() => {
    fetchData();
  }, []);

  //selected option to save the state
  const handleSelectedGenre = (genre) => {
    setSelectedGenre(genre);
  };

  //to filtered the moives on the basis of selected Genre
  const genreFilteredMovies =
    selectedGenre === "All Movies"
      ? movieData
      : movieData.filter((movie) => {
          return movie.Genre === selectedGenre ? true : false;
        });
  console.log("genreFilteredMovies :>> ", genreFilteredMovies);

  //to delete the moives from data
  const deleteMoive = (id) => {
    setOpen(true);
    setDeleteId(id);
  };

  const popDelete = () => {
    const tempData = movieData.filter((value) => {
      return value.id !== isDeleteId.id;
      // console.log("isDeleteId.id", value);
    });
    setOpen(false);
    setMovieData(tempData);
    // alert("popdelete");
  };
  //
  const selectedPageNumber = (pageNumber) => {
    setSelectedPage(pageNumber);
  };

  const getPages = () => {
    const totalPages = Math.ceil(genreFilteredMovies.length / pageSize);
    const pages = [];

    for (let i = 1; i <= totalPages; i++) {
      pages.push(i);
    }

    return pages;
  };

  const pages = getPages();

  // displaying numbers of pages according to numbers of movies
  const startIndex = selectedPage * pageSize - pageSize;
  const endIndex = selectedPage * pageSize - 1;

  const paginatedMovies = genreFilteredMovies.filter((_movie, index) => {
    if (index >= startIndex && index <= endIndex) {
      return true;
    }

    return false;
  });

  const sortMovies = (heading) => {
    console.log(heading);
    selectTableHeading === "asc"
      ? setSelectTableHeading("des")
      : setSelectTableHeading("asc");

    getHeading(selectTableHeading, heading);
  };

  const getHeading = (selectTableHeading, heading) => {
    if (heading === "Title") {
      selectTableHeading === "asc"
        ? genreFilteredMovies.sort((preMovie, nextMovie) =>
            preMovie.Title > nextMovie.Title ? 1 : -1
          )
        : genreFilteredMovies.sort((preMovie, nextMovie) =>
            preMovie.Title < nextMovie.Title ? 1 : -1
          );
      return;
    } else if (heading === "Genre") {
      selectTableHeading === "asc"
        ? genreFilteredMovies.sort((preMovie, nextMovie) =>
            preMovie.Genre > nextMovie.Genre ? 1 : -1
          )
        : genreFilteredMovies.sort((preMovie, nextMovie) =>
            preMovie.Genre < nextMovie.Genre ? 1 : -1
          );
      return;
    } else if (heading === "Stock") {
      selectTableHeading === "asc"
        ? genreFilteredMovies.sort((preMovie, nextMovie) =>
            preMovie.Metascore > nextMovie.Metascore ? 1 : -1
          )
        : genreFilteredMovies.sort((preMovie, nextMovie) =>
            preMovie.Metascore < nextMovie.Metascore ? 1 : -1
          );
      return;
    } else if (heading === "Rate") {
      selectTableHeading === "asc"
        ? genreFilteredMovies.sort((preMovie, nextMovie) =>
            preMovie.imdbRating > nextMovie.imdbRating ? 1 : -1
          )
        : genreFilteredMovies.sort((preMovie, nextMovie) =>
            preMovie.imdbRating < nextMovie.imdbRating ? 1 : -1
          );
      return;
    }
  };

  return (
    <>
      <DeletePopup
        open={isOpen}
        onClose={() => setOpen(false)}
        popDelete={popDelete}
      />
      <div className="container ">
        <Form open={isOpenForm} onClose={() => setOpenForm(false)} />
        <AddForm
          open={isOpenAddForm}
          onClose={() => setOpenAddForm(false)}
          setMovieData={setMovieData}
          movieData={movieData}
        />

        <div className="row">
          <div className="col-3">
            <ul className="list-group mt-4">
              <li
                className={
                  selectedGenre === "All Movies"
                    ? "list-group-item active"
                    : "list-group-item "
                }
                onClick={() => {
                  handleSelectedGenre("All Movies");
                }}
              >
                All Movies
              </li>
              <li
                className={
                  selectedGenre === "Action"
                    ? "list-group-item active"
                    : "list-group-item"
                }
                onClick={() => {
                  handleSelectedGenre("Action");
                }}
              >
                Action
              </li>
              <li
                className={
                  selectedGenre === "Comedy"
                    ? "list-group-item active"
                    : "list-group-item"
                }
                onClick={() => {
                  handleSelectedGenre("Comedy");
                }}
              >
                Comedy
              </li>
              <li
                className={
                  selectedGenre === "Thriller"
                    ? "list-group-item active"
                    : "list-group-item"
                }
                onClick={() => {
                  handleSelectedGenre("Thriller");
                }}
              >
                Thriller
              </li>
            </ul>
          </div>
          <div className="col">
            <p className="mt-4"> Showing {genreFilteredMovies.length} moives</p>
            <div className="  mb-4 input-group " onSubmit={handelSearch}>
              <input
                className="form-control me-2 "
                type="search"
                placeholder="Search..."
                value={searchValue}
                onChange={(e) => setSearchValue(e.target.value)}
              />
              <button
                className="btn btn-success"
                onClick={() => setOpenAddForm(true)}
              >
                Add New
              </button>
            </div>
            <table className="table ">
              <thead>
                <tr>
                  <th onClick={() => sortMovies("Title")}>Title</th>
                  <th onClick={() => sortMovies("Genre")}>Genre</th>
                  <th onClick={() => sortMovies("Stock")}>Stock</th>
                  <th onClick={() => sortMovies("Rate")}>Rate</th>
                  <th></th>
                  <th></th>
                  <th></th>
                </tr>
              </thead>
              <tbody>
                {paginatedMovies.map((value, index) => {
                  return (
                    <tr>
                      <td>{value.Title}</td>
                      <td>{value.Genre}</td>
                      <td>{value.Metascore}</td>
                      <td>{value.imdbRating}</td>
                      <td>
                        <i className="fa fa-heart" aria-hidden="true"></i>
                        <i className="fa fa-heart-o" aria-hidden="true"></i>
                      </td>
                      <td>
                        <button
                          className=" btn btn-primary"
                          onClick={() => setOpenForm(true)}
                        >
                          Edit
                        </button>
                      </td>
                      <td>
                        <button
                          className=" btn btn-danger"
                          onClick={() => deleteMoive(value)}
                        >
                          Delete
                        </button>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
            <div className="nav">
              <ul className="pagination">
                {pages.map((value) => {
                  return (
                    <li
                      className={
                        selectedPage === value
                          ? "page-item active"
                          : "page-item"
                      }
                    >
                      <button
                        className="page-link"
                        onClick={() => selectedPageNumber(value)}
                      >
                        {value}
                      </button>
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
