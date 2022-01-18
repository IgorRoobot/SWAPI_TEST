import { BackdropImg, InfoSection, Wrapper } from "./styles";
import { MOVIES } from "routing/paths";
import { ISingleMovie } from "shared/interfaces/components/Movies/singleMovie";
import { Skeleton } from "shared/components/Skeleton";

export const SingleMovie: React.FC<ISingleMovie> = ({
  id,
  title,
  opening_crawl,
  isLoading,
}: ISingleMovie) => {
  return (
    <Wrapper to={`${MOVIES}/${id}`}>
      {isLoading ? (
        <Skeleton width={"100%"} height={"100%"} />
      ) : (
        <>
          <BackdropImg>
            <img
              src="https://pbs.twimg.com/media/EW7xYmsWoAAu6QD.jpg"
              height="100%"
              width="100%"
              alt="poster"
            />
          </BackdropImg>
          <InfoSection>
            <h1>{title}</h1>
            <p>{opening_crawl}</p>
          </InfoSection>
        </>
      )}
    </Wrapper>
  );
};
