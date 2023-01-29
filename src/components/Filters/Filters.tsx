import {
  StyledFilters,
  TopPanel,
  Title,
  Form,
  LabelSort,
  NameInput,
  Label,
  Input,
  BlockInputs,
  ControlePanel,
  Button,
  StylesCrossIcon,
  stylesSelect,
} from "./style";
import Select from "react-select";
import { useForm, SubmitHandler, Controller } from "react-hook-form";
import { transformGenre } from "utilits";
import { useAppDispatch } from "store";
import { changeSearchFilterValue } from "store";
import { useNavigate } from "react-router-dom";
import { PAGE } from "router";

interface IProps {
  toggleFilters: () => void;
}

interface IFilterValues {
  movieName: string;
  yearFrom: string;
  yearTo: string;
  ratingFrom: string;
  ratingTo: string;
  genres: IOption;
}

interface IOption {
  label: string;
  value: string;
}

export const Filters = ({ toggleFilters }: IProps) => {
  const dispatch = useAppDispatch();
  const genres = transformGenre();
  const navigate = useNavigate();
  const { register, handleSubmit, control, setValue } = useForm<IFilterValues>({
    mode: "onSubmit",
  });

  const getResultSearch: SubmitHandler<IFilterValues> = ({
    movieName,
    genres,
    yearFrom,
    yearTo,
    ratingFrom,
    ratingTo,
  }) => {
    dispatch(
      changeSearchFilterValue({ movieName, genres, yearFrom, yearTo, ratingFrom, ratingTo }),
    );
    navigate(PAGE.FILTERS);
  };

  const clearForm = () => {
    setValue("movieName", "");
    setValue("yearFrom", "");
    setValue("yearTo", "");
    setValue("ratingFrom", "");
    setValue("ratingTo", "");
  };

  return (
    <StyledFilters>
      <TopPanel>
        <Title>Filters</Title>
        <StylesCrossIcon onClick={toggleFilters} />
      </TopPanel>
      <Form onSubmit={handleSubmit(getResultSearch)}>
        <LabelSort>
          <NameInput>Sort by</NameInput>
        </LabelSort>
        <Label>
          <NameInput>Full or short movie name</NameInput>
          <Input placeholder="Your text" {...register("movieName")} />
        </Label>
        <Label>
          <NameInput>Genre</NameInput>
          <Controller
            control={control}
            name="genres"
            render={({ field: { onChange, value } }) => (
              <Select
                isClearable
                options={genres}
                placeholder="Select genres"
                value={value}
                onChange={onChange}
                styles={stylesSelect}
              />
            )}
          />
        </Label>
        <Label>
          <NameInput>Year</NameInput>
          <BlockInputs>
            <Input placeholder="From" {...register("yearFrom")} />
            <Input placeholder="To" {...register("yearTo")} />
          </BlockInputs>
        </Label>
        <Label>
          <NameInput>Rating</NameInput>
          <BlockInputs>
            <Input placeholder="From" {...register("ratingFrom")} />
            <Input placeholder="To" {...register("ratingTo")} />
          </BlockInputs>
        </Label>
        <ControlePanel>
          <Button
            onClick={(e) => {
              e.preventDefault();
              clearForm();
            }}
          >
            Clear filters
          </Button>
          <Button type="submit">Show results</Button>
        </ControlePanel>
      </Form>
    </StyledFilters>
  );
};
