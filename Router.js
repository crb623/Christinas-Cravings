/* import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Layout } from './components/Layout';
import { AllBlogPosts } from './components/Allblogpost';
import { DishPostDetails } from './components/Dishpostdetails';
import { Home } from './components/Home';
import { FavoritesPage } from './components/Favoritespage';
import { SearchPage } from './components/Searchpage';
import { About } from './components/About';


function MyRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>

          <Route index element={<Home />} /> 
          <Route 
            path="/all/blog/posts"
            element={<AllBlogPosts />} 
          />
          <Route 
            path="/dish/post/details"
            element={<DishPostDetails />} 
          />
          <Route 
            path="/favorites/page"
            element={<FavoritesPage />} 
          />
          <Route 
            path="/search"
            element={<SearchPage />} 
          />
          <Route 
            path="/about"
            element={<About />} 
          />
          <Route 
            path="/*"
            element={<Home />} 
          />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export { MyRoutes }; */