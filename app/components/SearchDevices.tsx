"use client";
import { useState } from "react";
import { Combobox } from "@headlessui/react";
import searchForDevices from "@/api/searchForDevices";

export default  function SearchDevices() {
  // const [query, setQuery] = useState("");
  // const searchedDevices: Promise<searchedDevices> = searchForDevices(query);
  // const filteredDevices = await searchedDevices
  // const [selectedPerson, setSelectedPerson] = useState(filteredDevices[0]);

  return (
    <div>
      {/* <Combobox value={selectedPerson} onChange={setSelectedPerson}>
        <Combobox.Input onChange={(event) => setQuery(event.target.value)} />
        <Combobox.Options>
          {filteredDevices.map((person:any) => (
            <Combobox.Option key={person} value={person}>
              {person.name}
            </Combobox.Option>
          ))}
        </Combobox.Options>
      </Combobox> */}
    </div>
  );
}
