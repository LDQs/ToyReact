import {ToyReact, Component} from "./ToyReact.js"
class MyComponents extends Component{
    render() {
        return <div>
            <span>Hello</span>
            <span>World</span>
            <div>
                {this.children}
            </div>
        </div>
    }
}

let a = <MyComponents name="a" id="ida">
    <div>123</div>
</MyComponents>

ToyReact.render(
    a,
    document.body
)
