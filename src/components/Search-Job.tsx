import { useEffect } from "react";

interface SearchJobProps {
  data: any[];
  search: string;
  setFilteredData: React.Dispatch<React.SetStateAction<any[]>>;
}

const SearchJob: React.FC<SearchJobProps> = ({ data, search, setFilteredData }) => {
  useEffect(() => {
    const searchJob = () => {
      const searchTerm = search.trim().toLowerCase();
      console.log("Search Term:", searchTerm); 
      console.log("Data:", data); 

      if (searchTerm === "") {
        console.log("Search is empty, returning full data");
        setFilteredData(data);
        return;
      }

      const results = data.filter((item) => {
        return item.position.toLowerCase().includes(searchTerm);
      });

      console.log("Filtered Results:", results); // ნახე რა შედეგებს ვიღებთ
      setFilteredData(results);
    };

    searchJob();
  }, [search, data, setFilteredData]);

  return null;
};

export default SearchJob;
