import './RightSidebar.css'
import Widget from './Widget'
import WidgetTags from './WidgetTags'

export default function RightSidebar(){
    return (
        <aside className='right-sidebar'>
   <Widget/>
   <WidgetTags/>
        </aside>
    )
}