import GoogleMapComp, { TypeGoogleMapComp } from './GoogleMapComp';

const Map = ({
  name,
  email,
  site,
  center
} : TypeMap) => {
  return (
    <>
      <address>
        Contact {name} via{" "}
        <a data-testid="email" href={"mailto:" + email}>
          email
        </a>
        or on their <a data-testid="site" href={site}>
          website
        </a>.
      </address>
      <GoogleMapComp center={center} />
    </>
  );
}

export default Map;

export type TypeMap = {
  name: string;
  email: string;
  site: string;
} & TypeGoogleMapComp;
