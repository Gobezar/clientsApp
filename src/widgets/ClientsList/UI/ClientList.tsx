import React from "react";
import { clients } from "../consts/clients";
import { useAppDispatch } from "../../../store/reduxHooks";
import ClientItem from "../../../entities/ClientItem/UI/ClientItem";
import { setCurrentClient } from "../../../entities/ClientItem/model/CurrentClientSlice";
import useFilteredClients from "../model/useFilteredClients";

const ClientList = () => {
  const dispatch = useAppDispatch();
  const filteredClients = useFilteredClients();

  return (
    <div className="clientListContainer">
      {filteredClients.length > 0 ? (
        filteredClients.map((item) => (
          <ClientItem
            key={item.id}
            name={item.name}
            surname={item.surname}
            photo={item.photo}
            onClick={() => dispatch(setCurrentClient(item))}
          />
        ))
      ) : (
        <p>Клиенты по заданным параметрам поиска отсутствуют.</p>
      )}
    </div>
  );
};

export default ClientList;
