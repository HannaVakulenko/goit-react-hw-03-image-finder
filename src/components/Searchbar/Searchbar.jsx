import { Component } from 'react';
import { SearchForm, SearchButton, SearchInput } from './Searchbar.styled';
import { BsSearch } from 'react-icons/bs';
import { toast } from 'react-hot-toast';

export class Searchbar extends Component {
  state = {
    searchValue: '',
  };

  onChangeInput = e => {
    const { value } = e.currentTarget;
    this.setState({ searchValue: value });
  };

  onSearchImage = e => {
    e.preventDefault();

    if (!this.state.searchValue) {
      return toast.error('Enter text for search.');
    }

    const { searchValue } = this.state;
    this.setState({ searchValue: '' });

    this.props.onSubmit(searchValue);
  };

  render() {
    return (
      <SearchForm onSubmit={this.onSearchImage}>
        <SearchButton type="submit">
          <BsSearch size="16" />
        </SearchButton>
        <SearchInput
          id="input"
          type="text"
          autoComplete="off"
          autoFocus
          onChange={this.onChangeInput}
          placeholder="Search images and photos"
        ></SearchInput>
      </SearchForm>
    );
  }
}
