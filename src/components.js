import styled, { css } from 'styled-components'
import colors from './colors'

const Button = styled.button`
  background-color: ${colors.primary[500]};
  border-radius: 5px;
  height: 36px;
  border: 0;
  padding: 10px 15px;
  text-transform: uppercase;
  font-size: 14px;
  box-shadow: 0px 3px 5px -2px rgba(0,0,0,0.5);
  outline:none;
  &:hover {
    background-color: ${colors.primary[700]};
    ${props => props.secondary && css`background-color: ${colors.secondary[700]};`}
    ${props => props.disabled && css`background-color: #dcdcdc;`}
  }
  &:active {
    background-color: ${colors.primary[900]};
    ${props => props.secondary && css`background-color: ${colors.secondary[900]};`}
  }
  transition: 0.2s;
  ${props => props.secondary && css`background-color: ${colors.secondary[500]};`}
  ${props => props.disabled && css`background-color: #dcdcdc; box-shadow: none; color: #a0a0a0;`}
  ${props => props.next && css`float: right; margin-right: 5px;`}
  cursor:pointer;
`

const Typography = styled.div`
  font-family: Roboto, sans-serif;
  ${props => props.h6 && css`font-size: 1.25rem;`}
  ${props => props.h5 && css`font-size: 1.5rem;`}
  ${props => props.h4 && css`font-size: 2.125rem;`}
  ${props => props.h3 && css`font-size: 3rem;`}
  ${props => props.h2 && css`font-size: 3.75rem;`}
  ${props => props.h1 && css`font-size: 6rem;`}
`
const Divider = styled.hr`
  border: none;
  height: 1px;
  margin: 0;
  flex-shrink: 0;
  background-color: rgba(0, 0, 0, 0.12);
`

const SidebarItem = styled.div`
  padding: 12.5px 50px;
  padding-right: 25px;
  font-size:16px;
  &:hover {
    background-color: #f5f5f5;
  }
  &:active {
    background-color: #bdbdbd;
  }
  transition: 0.2s;
  cursor:pointer;
`

const List = styled.ul`
  margin: 0;
  padding: 8px 0;
  position: relative;
  list-style: none;
`

const Toolbar = styled.div`
  padding: 0 24px;
  height: 64px;
  display: flex;
  position: relative;
  align-items: center;
`
const AppBar = styled.header`
  color: #000;
  background-color: ${colors.primary[500]};
  top: 0;
  left: auto;
  right: 0;
  position: fixed;
  width: 100%;
  display: flex;
  z-index: 11000a;
  box-sizing: border-box;
  flex-shrink: 0;
  flex-direction: column;
  box-shadow: 0px 2px 4px -1px rgba(0,0,0,0.2), 0px 4px 5px 0px rgba(0,0,0,0.14), 0px 1px 10px 0px rgba(0,0,0,0.12);
`

export { Button, Typography, Divider, SidebarItem, List, Toolbar, AppBar }
