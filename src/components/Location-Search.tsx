import { useEffect } from "react";

interface LocationSearchProps {
  data: any[];
  location: string;
  setFilteredData: React.Dispatch<React.SetStateAction<any[]>>;
}

const LocationSearch: React.FC<LocationSearchProps> = ({
  data,
  location,
  setFilteredData,
}) => {
  useEffect(() => {
    const locationSearch = () => {
      const locationTerm = location.trim().toLowerCase();
      if (locationTerm === "") {
        setFilteredData(data);
        return;
      }
      const locationResults = data.filter((item) => {
        return item.location.toLowerCase().includes(locationTerm);
      });
      setFilteredData(locationResults);
    };

    locationSearch();
  }, [location, data, setFilteredData]);

  return null; 
};

export default LocationSearch;
