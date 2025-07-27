import { useSelector, useDispatch } from "react-redux";
import { useState, useEffect } from "react";
import { selectFilters, selectBrands } from "../../redux/selectors";
import { setFilters } from "../../redux/slice";
import s from "./CarFilters.module.css";
import Select, { selectClasses } from "@mui/joy/Select";
import Option from "@mui/joy/Option";
import KeyboardArrowDown from "@mui/icons-material/KeyboardArrowDown";
import { Input } from "@mui/joy";

const CarFilters = () => {
  const dispatch = useDispatch();
  const filters = useSelector(selectFilters);
  const brands = useSelector(selectBrands);

  const [form, setForm] = useState({
    brand: "",
    rentalPrice: "",
    minMileage: "",
    maxMileage: "",
  });

  useEffect(() => {
    setForm({
      brand: filters.brand || "",
      rentalPrice: filters.rentalPrice || "",
      minMileage: filters.minMileage || "",
      maxMileage: filters.maxMileage || "",
    });
  }, [filters]);

  const handleChange = (field) => (event, newValue) => {
    setForm((prev) => ({
      ...prev,
      [field]: newValue,
    }));
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSearch = () => {
    dispatch(
      setFilters({
        brand: form.brand,
        rentalPrice: form.rentalPrice,
        minMileage: form.minMileage,
        maxMileage: form.maxMileage,
        page: 1,
      })
    );
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    handleSearch();
  };

  return (
    <form className={s.filterContainer} onSubmit={handleSubmit}>
      <div className={s.filter}>
        <label>Car brand</label>

        <Select
          name="brand"
          value={form.brand || null}
          onChange={handleChange("brand")}
          placeholder="Choose a brand"
          indicator={<KeyboardArrowDown />}
          sx={{
            width: 240,
            height: 44,
            backgroundColor: "#f7f7f7",
            fontWeight: 500,
            fontSize: 16,
            fontFamily: "Manrope",
            color: "#101828",
            border: "none",

            [`& .${selectClasses.button}`]: {
              alignItems: "center",
              fontWeight: 500,
              fontSize: 16,
              fontFamily: "Manrope",
              color: form.brand ? "#101828" : "#101828",
            },

            [`& .${selectClasses.listbox}`]: {
              boxShadow: "0 4px 36px 0 rgba(0, 0, 0, 0.02)",
              maxHeight: 200,
              overflowY: "auto",
              "&::-webkit-scrollbar": {
                width: 6,
              },
              "&::-webkit-scrollbar-thumb": {
                backgroundColor: "#dadde1 !important",
                borderRadius: 3,
              },
            },
            "& .MuiSelect-button": {
              display: "flex",
              alignItems: "center",
              height: "100%",
              padding: 0,
              textAlign: "left",
            },
          }}
        >
          {Array.isArray(brands) &&
            brands.map((b) => (
              <Option
                key={b}
                value={b}
                sx={{
                  backgroundColor: "#ffffff !important",
                  fontWeight: 500,
                  fontSize: 16,
                  lineHeight: 1.25,
                  color: "#8d929a",

                  '&[aria-selected="true"]': {
                    color: "#101828",
                    backgroundColor: "#ffffff !important",
                  },
                  "&[data-hover]": {
                    backgroundColor: "#ffffff !important",
                  },
                  "&:hover": {
                    backgroundColor: "#ffffff !important",
                  },
                  "&.Mui-focusVisible": {
                    backgroundColor: "#ffffff !important",
                  },
                }}
              >
                {b}
              </Option>
            ))}
        </Select>
      </div>

      <div className={s.filter}>
        <label>Price / 1 hour</label>
        <Select
          name="rentalPrice"
          value={form.rentalPrice || null}
          onChange={handleChange("rentalPrice")}
          placeholder="Choose a price"
          renderValue={(selected) =>
            selected?.label ? `To $${selected.label}` : "Choose a price"
          }
          indicator={<KeyboardArrowDown />}
          sx={{
            width: 196,
            height: 44,
            backgroundColor: "#f7f7f7",
            fontWeight: 500,
            fontSize: 16,
            fontFamily: "Manrope",
            color: "#101828",
            border: "none",

            [`& .${selectClasses.button}`]: {
              alignItems: "center",
              fontWeight: 500,
              fontSize: 16,
              fontFamily: "Manrope",
              color: form.brand ? "#101828" : "#101828",
            },

            [`& .${selectClasses.listbox}`]: {
              boxShadow: "0 4px 36px 0 rgba(0, 0, 0, 0.02)",
              maxHeight: 200,
              overflowY: "auto",
              "&::-webkit-scrollbar": {
                width: 6,
              },
              "&::-webkit-scrollbar-thumb": {
                backgroundColor: "#dadde1 !important",
                borderRadius: 3,
              },
            },
            "& .MuiSelect-button": {
              display: "flex",
              alignItems: "center",
              height: "100%",
              padding: 0,
              textAlign: "left",
            },
          }}
        >
          {[...Array(10)].map((_, i) => {
            const price = (i + 1) * 10;
            return (
              <Option
                key={price}
                value={price}
                sx={{
                  backgroundColor: "#ffffff !important",
                  fontWeight: 500,
                  fontSize: 16,
                  lineHeight: 1.25,
                  color: "#8d929a",

                  '&[aria-selected="true"]': {
                    color: "#101828",
                    backgroundColor: "#ffffff !important",
                  },
                  "&[data-hover]": {
                    backgroundColor: "#ffffff !important",
                  },
                  "&:hover": {
                    backgroundColor: "#ffffff !important",
                  },
                  "&.Mui-focusVisible": {
                    backgroundColor: "#ffffff !important",
                  },
                }}
              >
                {price}
              </Option>
            );
          })}
        </Select>
      </div>

      <div className={s.filter}>
        <label>Car mileage / km</label>

        <div className={s.input}>
          <Input
            type="number"
            name="minMileage"
            startDecorator="From"
            value={form.minMileage}
            onChange={handleInputChange}
            sx={{
              borderTopRightRadius: 0,
              borderBottomRightRadius: 0,
              border: "none",
              width: "50%",
              height: 44,
              background: "#f7f7f7",
              color: "#101828",
              fontWeight: 500,
              fontSize: 16,
              lineHeight: 1.25,
              "--Input-focusedHighlight": "transparent !important",
              "& input[type=number]": {
                MozAppearance: "textfield",
              },
              "& input[type=number]::-webkit-outer-spin-button, & input[type=number]::-webkit-inner-spin-button":
                {
                  WebkitAppearance: "none",
                  margin: 0,
                },
              "&:focus-within": {
                outline: "none",
                boxShadow: "none",
                borderColor: "transparent",
              },
              "& .Mui-focused": {
                outline: "none",
                boxShadow: "none",
                borderColor: "transparent",
              },
              "&:focus-visible": {
                outline: "none",
              },
            }}
          />
          <Input
            type="number"
            name="maxMileage"
            startDecorator="To"
            value={form.maxMileage}
            onChange={handleInputChange}
            sx={{
              borderTopLeftRadius: 0,
              borderBottomLeftRadius: 0,
              borderTop: "none",
              borderBottom: "none",
              borderRight: "none",
              width: "50%",
              height: 44,
              background: "#f7f7f7",
              color: "#101828",
              fontWeight: 500,
              fontSize: 16,
              lineHeight: 1.25,

              "--Input-focusedHighlight": "transparent !important",

              "& input[type=number]": {
                MozAppearance: "textfield",
              },
              "& input[type=number]::-webkit-outer-spin-button, & input[type=number]::-webkit-inner-spin-button":
                {
                  WebkitAppearance: "none",
                  margin: 0,
                },
              "&:focus-within": {
                outline: "none !important",
                boxShadow: "none",
                borderColor: "transparent",
              },
              "& .Mui-focused": {
                outline: "none !important",
                boxShadow: "none",
                borderColor: "transparent",
              },
              "&:focus-visible": {
                outline: "none !important",
              },
              "& input": {
                outline: "none !important",
                boxShadow: "none !important",
              },

              "& input:focus": {
                outline: "none !important",
                boxShadow: "none !important",
              },
            }}
          />
        </div>
      </div>

      <button className={s.button} onClick={handleSearch}>
        Search
      </button>
    </form>
  );
};

export default CarFilters;
