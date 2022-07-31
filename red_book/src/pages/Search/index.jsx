import React, { useState,useEffect } from "react";
import { useNavigate } from 'react-router-dom'
import SearchBox from '../../components/common/SearchBox'
import ListSearch from '../../components/ListSearch'
import { 
  Container,HeaderWrapper,GoodsWrapper,ListWrapper,Empty,EnterLoading 
} from "./style";
import nothing from '../../assets/nothing.jpg'
import { connect } from "react-redux";
import { getSearch,changeEnterLoading } from "./store/actionCreators";
import Loading from '../../components/common/loading'

const Search = (props) =>{
  const [query, setQuery] = useState('')
  const navigate = useNavigate()
  const { enterLoading,search } = props
  const { getSearchDispatch,changeEnterLoadingDispatch } = props
  const handleQuery = (q) => {
    setQuery(q)
  }
  useEffect(() => {
    if (query.trim()) {
      getSearchDispatch(query),
      changeEnterLoadingDispatch(true)
    }
  }, [query])
  const renderGoodsList = () => {
    return (
      <ListWrapper>
        <div className="container">
        {
          search.filter(item => 
            item.title.indexOf(query) != -1
          ).map(item => {
            return (
              <ListSearch key={item.id} things={item} />
            )
          })
        }
        </div>
      </ListWrapper>
    )
  }
const EmptyWrapper = () => {
    return (
      <Empty>
          <img src={nothing} />
      </Empty>
    )
  }
return (
        <Container>
          <HeaderWrapper>
            <SearchBox
              newQuery={query}
              handleQuery={handleQuery}>
            </SearchBox>
            <span onClick={() => navigate(-1)}>取消</span>
          </HeaderWrapper>
          <GoodsWrapper show={query}>
            {
              search.filter(
                item => item.title.indexOf(query) != -1
              ).length > 0
              ?
                renderGoodsList()
              :
                EmptyWrapper()
            }
          </GoodsWrapper>
          { enterLoading && <EnterLoading><Loading></Loading></EnterLoading> }
        </Container>
      )  
 }

const mapStateToProps = (state) => {
  return {
    search: state.searchlist.search,
    enterLoading:state.searchlist.enterLoading
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    getSearchDispatch(query) {
      dispatch(getSearch(query))
    },
    changeEnterLoadingDispatch(data) {
      dispatch(changeEnterLoading(data))
    }
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(React.memo(Search))