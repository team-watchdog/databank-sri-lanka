import { FunctionComponent } from "react";
import { gql, useLazyQuery } from "@apollo/client";

// components
import AutoCompleteInput from "../AutoCompleteInput";
import { Location } from "../../types/location.type";

export const Queries = {
    FIND_ADDRESSES: gql`
        query Query($searchTerm: String!) {
            findAddresses(searchTerm: $searchTerm){
                formattedAddress
                geo {
                    lat
                    lon
                }
                placeId
                district
                province
            }
        }
    `
}

interface LocationSearchInputProps{
    onSelect: (location: Location) => void;
}

const LocationSearchInput: FunctionComponent<LocationSearchInputProps> = (props: LocationSearchInputProps) => {
    const { onSelect } = props;
    const [ getLocations ] = useLazyQuery(Queries.FIND_ADDRESSES);

    return (
        <AutoCompleteInput<Location>
            getAutocompleteSuggestions={async (value) => {
                console.log("SUGGESTION");
                const { data } = await getLocations({ variables: { searchTerm: value } });
                if (data.findAddresses && data.findAddresses.length > 0) {
                    return data.findAddresses;
                }
                return null;
            }}
            renderItem={(item: Location) => (
                <div className="mb-2">
                    <h2>{item.formattedAddress}</h2>
                        <div className="flex gap-1 flex-wrap py-2">
                        <span className="p-2 text-white rounded-md text-sm bg-blue-800">{item.district}</span>
                        <span className="p-2 bg-blue-800 text-white rounded-md text-sm">{item.province}</span>
                    </div>
                </div>
            )}
            onSelect={(item) => {
                onSelect(item);
            }}
        />
    )
}

export default LocationSearchInput;