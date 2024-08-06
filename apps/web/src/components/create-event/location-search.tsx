"use client"

import * as React from "react"
import { ChevronsUpDown } from "lucide-react"

import { Button } from "@/components/ui/button"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"
import { GoogleMap, useLoadScript, Marker } from '@react-google-maps/api'
import usePlacesAutocomplete, { getGeocode, getLatLng } from 'use-places-autocomplete'
import { env } from "@/env"
import { Input } from "../ui/input"

interface AddressLocation {
  address: string,
  coordinates: {
    lat: number,
    lng: number
  }
}

export const PlacesAutocomplete = ({ location, setLocation }: { location: string, setLocation?: (location: AddressLocation) => void }) => {
  const [open, setOpen] = React.useState(false)
  const {
    value,
    setValue,
    suggestions: { data },
    clearSuggestions,
  } = usePlacesAutocomplete({
    defaultValue: location,
  });

  const handleSelect = React.useCallback(async (address: string) => {
    setValue(address, false);
    clearSuggestions();

    const results = await getGeocode({ address });
    console.log({ results })
    if (results[0]) {
      const { lat, lng } = getLatLng(results[0]);
      setLocation?.({
        address: results[0].formatted_address,
        coordinates: {
          lat,
          lng
        }
      });
    }
  }, [
    clearSuggestions,
    setValue,
    setLocation
  ])
  console.log({ data, value })
  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button
          variant="outline"
          role="combobox"
          aria-expanded={open}
          className="w-full whitespace-break-spaces text-left flex justify-between"
        >
          {location
            ? location
            : "Search address"}
          <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-[400px] p-0">
        <Input placeholder="Search address" value={value} onChange={e => setValue(e.target.value)} />
        <div className="grid gap-2">
          {data.map(({ place_id, description }) => (
            <Button
              variant="ghost"
              className="whitespace-break-spaces text-left w-full flex justify-start"
              key={place_id}
              onClick={() => {
                handleSelect(description)
                setOpen(false)
              }}
            >
              {description}
            </Button>
          ))}
        </div>
      </PopoverContent>
    </Popover >
  );
};

export function Map({ location, onChange, showMap, showAutocomplete }: { location: AddressLocation | null, onChange?: (location: AddressLocation) => void, showMap?: boolean, showAutocomplete?: boolean }) {
  const center = React.useMemo(() => ({ lat: 43.45, lng: -80.49 }), []);

  const { isLoaded } = useLoadScript({
    googleMapsApiKey: env.NEXT_PUBLIC_GOOGLE_PLACES_API_KEY,
    libraries: ['places']
  })

  if (!isLoaded) return null;

  return (
    <>
      {showAutocomplete && <div className="places-container">
        <PlacesAutocomplete location={location?.address ?? ''} setLocation={onChange} />
      </div>}

      {showMap && <GoogleMap
        zoom={16}
        center={location?.coordinates ?? center}
        mapContainerClassName="h-[350px] w-full rounded-[var(--radius)]"
        options={{
          disableDefaultUI: true,
          clickableIcons: false,
          fullscreenControl: false,
        }}
      >
        {location?.coordinates && <Marker position={location.coordinates ?? center} />}
      </GoogleMap>}
    </>
  );
}

export function LocationSearch({ location, onChange }: { location: AddressLocation | null, onChange: (location: AddressLocation) => void }) {
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: env.NEXT_PUBLIC_GOOGLE_PLACES_API_KEY,
    libraries: ['places']
  })

  if (!isLoaded) return null;

  return (
    <Map location={location} onChange={onChange} showAutocomplete={true} showMap={location?.address === '' ? false : true} />
  )
}
