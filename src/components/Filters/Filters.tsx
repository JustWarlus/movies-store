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
  ControlSort,
  TabSort,
  stylesSelect,
} from "./style";
import Select from "react-select";
import { useForm, SubmitHandler, Controller } from "react-hook-form";
import { transformGenre } from "utilits";
import { useAppDispatch } from "store";
import { useState } from "react";
import { changeSearchFilterValue } from "store";
import { useNavigate } from "react-router-dom";
import { PAGE } from "router";
import { memo } from "react";
interface IProps {
  toggleFilters: () => void;
}

interface IFilterValues {
  movieName: string;
  yearFrom: number;
  yearTo: number;
  ratingFrom: number;
  ratingTo: number;
  genres: IOption;
}

interface IOption {
  label: string;
  value: string;
}

export const Filters = memo(({ toggleFilters }: IProps) => {
  const [typeSort, setTypeSort] = useState("externalId.imdb");
  const dispatch = useAppDispatch();
  const genres = transformGenre();
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    control,
    resetField,
    formState: { errors, isValid },
  } = useForm<IFilterValues>({
    mode: "onChange",
  });

  const getActiveSortTab = (type: string) => {
    return type === typeSort;
  };
  const getResultSearch: SubmitHandler<IFilterValues> = ({
    movieName,
    genres,
    yearFrom,
    yearTo,
    ratingFrom,
    ratingTo,
  }) => {
    dispatch(
      changeSearchFilterValue({
        movieName,
        genres,
        yearFrom,
        yearTo,
        ratingFrom,
        ratingTo,
        typeSort,
      }),
    );
    navigate(PAGE.FILTERS);
    toggleFilters();
  };

  const clearForm = () => {
    resetField("movieName");
    resetField("yearFrom");
    resetField("yearTo");
    resetField("ratingFrom");
    resetField("ratingTo");
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
          <ControlSort>
            <TabSort onClick={() => setTypeSort("year")} $isActive={getActiveSortTab("year")}>
              Year
            </TabSort>
            <TabSort
              onClick={() => setTypeSort("externalId.imdb")}
              $isActive={getActiveSortTab("externalId.imdb")}
            >
              Rating
            </TabSort>
          </ControlSort>
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
            <Input
              placeholder="From"
              type="number"
              {...register("yearFrom", {
                minLength: 4,
                maxLength: 4,
                min: 1950,
                max: 2023,
              })}
              $isError={Boolean(errors.yearFrom)}
            />
            <Input
              placeholder="To"
              type="number"
              $isError={Boolean(errors.yearTo)}
              {...register("yearTo", {
                minLength: 4,
                maxLength: 4,
                min: 1950,
                max: 2023,
              })}
            />
          </BlockInputs>
        </Label>
        <Label>
          <NameInput>Rating</NameInput>
          <BlockInputs>
            <Input
              placeholder="From"
              type="number"
              $isError={Boolean(errors.ratingFrom)}
              {...register("ratingFrom", {
                minLength: 1,
                maxLength: 2,
                min: 1,
                max: 10,
              })}
            />
            <Input
              placeholder="To"
              type="number"
              $isError={Boolean(errors.ratingTo)}
              {...register("ratingTo", {
                minLength: 1,
                maxLength: 2,
                min: 1,
                max: 10,
              })}
            />
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
          <Button type="submit" disabled={!isValid}>
            Show results
          </Button>
        </ControlePanel>
      </Form>
    </StyledFilters>
  );
});
