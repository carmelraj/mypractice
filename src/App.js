import logo from "./logo.svg";
import "./App.css";
import LazyHeader from "./Pages/Header/Header";
import LazyHomPage from "./Pages/HomPage/HomPage";
import LazySiteMap from "./Pages/SiteMap/SiteMap";
import LazyLayout from "./Pages/Layout/Layout";
import LazyReactFormHookes from "./Pages/Forms/ReactFormHookes/ReactFormHookes";
import LazyFormik from "./Pages/Forms/Formik/Formik";
import LazyReactFormHookesMui from "./Pages/Forms/ReactFormHookesMui/ReactFormHookesMui";
import LazySearchFilter from "./Pages/SearchFilter/SearchFilter";
import LazySearchMultiFilter from "./Pages/SearchMultiFilter/SearchMultiFilter";
import LazyDatepicker from "./Pages/datepickers/datepicker";
import LazyFormMultiStep from "./Pages/Forms/ReactForms/FormMultiStep/FormMultiStep";
import LazySingleFormMultipleStep from "./Pages/Forms/ReactForms/SingleFormMultipleStep/SingleFormMultipleStep";
import LazySearchCities from "./Pages/Hooks/SearchCities/SearchCities";
import LazyThrotelling from "./Pages/throtelling/throtelling";
import LazyCustomHookesGet from "./Pages/CustomHookesGet/CustomHookesGet";
import LazyUseRefForm from "./Pages/UseRefForm/UseRefForm";
import LazyLocalStorage from "./Pages/Storage/LocalStorage/LocalStorage";
import LazyGoogleMaApi from "./Pages/GoogleMaAPI/GoogleMaAPI";
import LazyGoogleMapMarker from "./Pages/GoogleMapMarker/GoogleMapMarker";
import LazyExcersieone from "./Pages/Excersie/Excersieone/Excersieone";
import LazyExcersieTwo from "./Pages/Excersie/ExcersieTwo/ExcersieTwo";
import LazyExcersieThree from "./Pages/Excersie/ExcersieThree/ExcersieThree";
import LazyExcersieFour from "./Pages/Excersie/ExcersieFour/ExcersieFour";
import LazySearchParam from "./Pages/Home/SearchParam/SearchParam";
import LazyParams from "./Pages/Home/params/params";
import LazyHomeSearchFilter from "./Pages/Home/HomeSearchFilter/HomeSearchFilter";
import LazyAutoSearch from "./Pages/Home/AutoSearch/AutoSearch";
import UseReduce from "./Hookes/useReduce";
import TodoUseReduce from "./Hookes/todoUseReduce";
import HomeTodos from "./Pages/Home/HomeTodos/HomeTodos";
import LazyExerciseFive from "./Pages/Excersie/ExerciseFive/ExerciseFive";
import LazyImageUpload from "./Pages/Home/ImageUpload/ImageUpload";
import LazyPaginationOne from "./Pages/Home/PaginationOne/PaginationOne";
import LazyPaginationTwo from "./Pages/Home/PaginationTwo/PaginationTwo";
import LazyPaginationThree from "./Pages/Home/PaginationThree/PaginationThree";
import LazyImperative from "./Pages/Hooks/Imperative/Imperative";
import LazyHoc from "./Pages/Hooks/HOC/HOC";
import { BrowserRouter, Route, Routes } from "react-router-dom";
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/">
            <Route
              index
              element={
                <LazyLayout>
                  <LazyHomPage />
                </LazyLayout>
              }
            />
            <Route
              path="searchparams"
              element={
                <LazyLayout>
                  <LazySearchParam />
                </LazyLayout>
              }
            />
            <Route
              path="/params/:category"
              element={
                <LazyLayout>
                  <LazyParams />
                </LazyLayout>
              }
            />
            <Route
              path="home-search-filter"
              element={
                <LazyLayout>
                  <LazyHomeSearchFilter />
                </LazyLayout>
              }
            />
            <Route
              path="auto-search"
              element={
                <LazyLayout>
                  <LazyAutoSearch />
                </LazyLayout>
              }
            />

            <Route
              path="image-upload"
              element={
                <LazyLayout>
                  <LazyImageUpload />
                </LazyLayout>
              }
            />
            <Route
              path="pagination-one"
              element={
                <LazyLayout>
                  <LazyPaginationOne />
                </LazyLayout>
              }
            />
            <Route
              path="pagination-two"
              element={
                <LazyLayout>
                  <LazyPaginationTwo />
                </LazyLayout>
              }
            />
            <Route
              path="pagination-three"
              element={
                <LazyLayout>
                  <LazyPaginationThree />
                </LazyLayout>
              }
            />
          </Route>

          <Route
            path="/form-hookes"
            element={
              <LazyLayout>
                <LazyReactFormHookes />
              </LazyLayout>
            }
          />
          <Route
            path="/formik"
            element={
              <LazyLayout>
                <LazyFormik />
              </LazyLayout>
            }
          />
          <Route
            path="/mui-hookes"
            element={
              <LazyLayout>
                <LazyReactFormHookesMui />
              </LazyLayout>
            }
          />
          <Route
            path="/sitemap"
            element={
              <LazyLayout>
                <LazySiteMap />
              </LazyLayout>
            }
          />
          <Route
            path="/search"
            element={
              <LazyLayout>
                <LazySearchFilter />
              </LazyLayout>
            }
          />
          <Route
            path="/multi-search"
            element={
              <LazyLayout>
                <LazySearchMultiFilter />
              </LazyLayout>
            }
          />
          <Route
            path="/datepicker"
            element={
              <LazyLayout>
                <LazyDatepicker />
              </LazyLayout>
            }
          />
          <Route
            path="/form-multisteps"
            element={
              <LazyLayout>
                <LazyFormMultiStep />
              </LazyLayout>
            }
          />
          <Route
            path="/single-form-multi-stps"
            element={
              <LazyLayout>
                <LazySingleFormMultipleStep />
              </LazyLayout>
            }
          />

          <Route
            path="/search-cities"
            element={
              <LazyLayout>
                <LazySearchCities />
              </LazyLayout>
            }
          />
          <Route>
            <Route
              path="/reducer"
              element={
                <LazyLayout>
                  <UseReduce />
                </LazyLayout>
              }
            />
            <Route
              path="/todo"
              element={
                <LazyLayout>
                  <TodoUseReduce />
                </LazyLayout>
              }
            />
            <Route
              path="home-todos"
              element={
                <LazyLayout>
                  <HomeTodos />
                </LazyLayout>
              }
            />
            <Route
              path="imperative"
              element={
                <LazyLayout>
                  <LazyImperative />
                </LazyLayout>
              }
            />
            <Route
              path="hoc"
              element={
                <LazyLayout>
                  <LazyHoc />
                </LazyLayout>
              }
            />
          </Route>
          <Route
            path="/throtelling"
            element={
              <LazyLayout>
                <LazyThrotelling />
              </LazyLayout>
            }
          />
          <Route
            path="/get"
            element={
              <LazyLayout>
                <LazyCustomHookesGet />
              </LazyLayout>
            }
          />
          <Route
            path="/userref-form"
            element={
              <LazyLayout>
                <LazyUseRefForm />
              </LazyLayout>
            }
          />
          <Route
            path="/local-storage"
            element={
              <LazyLayout>
                <LazyLocalStorage />
              </LazyLayout>
            }
          />
          <Route
            path="/google-map"
            element={
              <LazyLayout>
                <LazyGoogleMaApi />
              </LazyLayout>
            }
          />
          <Route
            path="/google-marker"
            element={
              <LazyLayout>
                <LazyGoogleMapMarker />
              </LazyLayout>
            }
          />
          <Route
            path="/excersieone"
            element={
              <LazyLayout>
                <LazyExcersieone />
              </LazyLayout>
            }
          />
          <Route
            path="/excersitwo"
            element={
              <LazyLayout>
                <LazyExcersieTwo />
              </LazyLayout>
            }
          />
          <Route
            path="/excersithree"
            element={
              <LazyLayout>
                <LazyExcersieThree />
              </LazyLayout>
            }
          />
          <Route
            path="/excersefour"
            element={
              <LazyLayout>
                <LazyExcersieFour />
              </LazyLayout>
            }
          />
          <Route
            path="/exerciseFive"
            element={
              <LazyLayout>
                <LazyExerciseFive />
              </LazyLayout>
            }
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
