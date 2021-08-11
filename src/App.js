import React from 'react'
import { Route, Switch } from 'react-router-dom'
import { BookmarksProvider } from './BookmarksContext/BookmarksContext';
import {Layout} from './components/Layout/Layout'
import { FlickrProvider } from './FlickrContext/FlickrContext';
import { Bookmarks } from './Pages/Bookmarks/Bookmarks';
import { Home } from './Pages/Home/Home';


function App() {

  return (
    <FlickrProvider>
      <BookmarksProvider>
        <Layout>
          <Switch>
            <Route path="/" exact component={Home}/>
            <Route path="/bookmarks" component={Bookmarks}/>
            <Route/>
          </Switch>
        </Layout>
      </BookmarksProvider>
    </FlickrProvider>
  );
}

export default App;
