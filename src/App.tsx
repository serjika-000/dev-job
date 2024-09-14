import Header from "./components/Header";
import { useState } from "react";
import Input from "./components/Input";
import dataType from "./components/Data-Types";
import Jobs from "./components/Jobs";
import { Route, Routes } from "react-router-dom";
import SingleJobs from "./components/Single-Jobs";
import LoadMore from "./components/Load-More";
import DataFetching from "./components/Data-Fetching";
import SearchJob from "./components/Search-Job";
import LocationSearch from "./components/Location-Search";
import PaginationHandler from "./components/Pagination-Handler";

const App = () => {
  const [darkMode, setDarkMode] = useState<boolean>(false);
  const [data, setData] = useState<(typeof dataType)[]>([]);
  const [search, setSearch] = useState<string>("");
  const [filteredData, setFilteredData] = useState<(typeof dataType)[]>([]);
  const [location, setLocation] = useState<string>("");

  return (
    <div
      className={`w-full min-h-screen ${
        darkMode ? "bg-Midnight" : "bg-LightGrey"
      } duration-1000 transition-all`}
    >
      <Header darkMode={darkMode} setDarkMode={setDarkMode} />
      <DataFetching
        setData={setData}
        setFilteredData={setFilteredData}
        itemsPerPage={12}
      />
      <SearchJob data={data} search={search} setFilteredData={setFilteredData} />
      <LocationSearch
        data={data}
        location={location}
        setFilteredData={setFilteredData}
      />
      <PaginationHandler
        data={data}
        itemsPerPage={12}
        setFilteredData={setFilteredData}
      >
        {(handleLoadMore) => (
          <>
            <Routes>
              <Route
                path="/"
                element={
                  <>
                    <Input
                      darkMode={darkMode}
                      setDarkMode={setDarkMode}
                      search={search}
                      setSearch={setSearch}
                      data={data}
                      location={location}
                      setLocation={setLocation}
                      setFilteredData={setFilteredData}
                      searchJob={SearchJob}
                    />
                    <Jobs darkMode={darkMode} filteredData={filteredData} />
                    <LoadMore handleLoadMore={handleLoadMore} />
                  </>
                }
              />
              <Route
                path="/:id"
                element={<SingleJobs data={data} darkMode={darkMode} />}
              />
            </Routes>
          </>
        )}
      </PaginationHandler>
    </div>
  );
};

export default App;
