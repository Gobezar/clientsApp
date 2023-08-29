import { useAppSelector } from "../../../store/reduxHooks";
import { clients } from "../consts/clients";

const useFilteredClients = () => {
  const { sortMethod, searchText } = useAppSelector(
    (state) => state.FilterAndSortSlice
  );

  let filteredClients = clients.filter((client) => {
    const fullName = `${client.surname} ${client.name}`.toLowerCase();
    const search = searchText.toLowerCase();
    return fullName.includes(search);
  });

  if (sortMethod === "asc") {
    filteredClients = filteredClients.slice().sort((a, b) => {
      const nameA = `${a.surname} ${a.name}`.toLowerCase();
      const nameB = `${b.surname} ${b.name}`.toLowerCase();
      return nameA.localeCompare(nameB);
    });
  } else if (sortMethod === "desc") {
    filteredClients = filteredClients.slice().sort((a, b) => {
      const nameA = `${a.surname} ${a.name}`.toLowerCase();
      const nameB = `${b.surname} ${b.name}`.toLowerCase();
      return nameB.localeCompare(nameA);
    });
  }

  return filteredClients;
};

export default useFilteredClients;
