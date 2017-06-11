import { h } from 'preact';
import { Link } from 'preact-router';

export default function (props) {
  return (
    <div className='btn'>
      <a onClick={props.callback}>
        {props.name}
      </a>
    </div>
  )
}
