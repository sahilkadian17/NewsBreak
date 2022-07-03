import React from 'react'
import loading from './loading.gif'

const Spinner=()=> {
  return (
    <div className='text-center'>
    <img src={loading} alt="loading" />
    </div>
  )
}

export default Spinner
// https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=19e1d05d243c47929df5a0de5dd74f5d&page=${this.state.page}&pageSize=${this.props.pageSize}