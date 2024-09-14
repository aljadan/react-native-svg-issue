import * as React from 'react';
import Svg, {
    Defs,
    Path,
    LinearGradient,
    Stop,
    SvgProps,
    Mask,
    G,
    Rect,
} from 'react-native-svg';

function Logo(props: SvgProps) {
    return (
        <Svg
            width={70}
            height={70}
            viewBox="0 0 40 40"
            fill="none"
            {...props}
        >
            <Rect
                width={40}
                height={40}
                rx={10}
                fill="white"
            />
            <Rect
                x={0.416667}
                y={0.416667}
                width={39.1667}
                height={39.1667}
                rx={9.58333}
                stroke="black"
                strokeOpacity={0.12}
                strokeWidth={0.833333}
            />
            <Mask
                id="mask0_15680_122974"
                maskUnits="userSpaceOnUse"
                x={7}
                y={11}
                width={26}
                height={18}
            >
                <Path
                    d="M7.00049 11.1367H33.0001V28.8637H7.00049V11.1367Z"
                    fill="white"
                />
            </Mask>
            <G mask="url(#mask0_15680_122974)">
                <Mask
                    id="mask1_15680_122974"
                    maskUnits="userSpaceOnUse"
                    x={7}
                    y={11}
                    width={26}
                    height={18}
                >
                    <Path
                        d="M7.58838 21.1819C9.24105 23.5455 10.5429 26.0291 11.3692 28.7435C13.1419 24.7273 16.3319 21.4173 20.2327 19.5292C24.2536 21.4173 27.3235 24.7273 29.0962 28.7435C29.9226 26.0291 31.2244 23.4254 32.8771 21.1819C29.8072 16.9255 25.3154 13.7356 20.1173 11.9629C15.1501 13.7356 10.7783 16.9255 7.58838 21.1819Z"
                        fill="white"
                    />
                </Mask>
                <G mask="url(#mask1_15680_122974)">
                    <Path
                        d="M7.58838 28.7435H32.8771V11.9629H7.58838V28.7435Z"
                        fill="url(#paint0_linear_15680_122974)"
                    />
                </G>
            </G>
            <Defs>
                <LinearGradient
                    id="paint0_linear_15680_122974"
                    x1={20.2336}
                    y1={28.7454}
                    x2={20.2336}
                    y2={11.9638}
                    gradientUnits="userSpaceOnUse"
                >
                    <Stop stopColor="#82C341" />
                    <Stop
                        offset={0.0078125}
                        stopColor="#82C341"
                    />
                    <Stop
                        offset={0.0117188}
                        stopColor="#81C241"
                    />
                    <Stop
                        offset={0.015625}
                        stopColor="#80C241"
                    />
                    <Stop
                        offset={0.0195313}
                        stopColor="#80C241"
                    />
                    <Stop
                        offset={0.0234375}
                        stopColor="#7FC141"
                    />
                    <Stop
                        offset={0.0273438}
                        stopColor="#7FC141"
                    />
                    <Stop
                        offset={0.03125}
                        stopColor="#7EC142"
                    />
                    <Stop
                        offset={0.0351563}
                        stopColor="#7EC042"
                    />
                    <Stop
                        offset={0.0390625}
                        stopColor="#7DC042"
                    />
                    <Stop
                        offset={0.0429688}
                        stopColor="#7DC042"
                    />
                    <Stop
                        offset={0.046875}
                        stopColor="#7CBF42"
                    />
                    <Stop
                        offset={0.0507813}
                        stopColor="#7CBF42"
                    />
                    <Stop
                        offset={0.0546875}
                        stopColor="#7BBF42"
                    />
                    <Stop
                        offset={0.0585938}
                        stopColor="#7BBE42"
                    />
                    <Stop
                        offset={0.0625}
                        stopColor="#7ABE42"
                    />
                    <Stop
                        offset={0.0664063}
                        stopColor="#7ABE42"
                    />
                    <Stop
                        offset={0.0703125}
                        stopColor="#79BD42"
                    />
                    <Stop
                        offset={0.0742188}
                        stopColor="#79BD42"
                    />
                    <Stop
                        offset={0.078125}
                        stopColor="#78BD42"
                    />
                    <Stop
                        offset={0.0820313}
                        stopColor="#78BC43"
                    />
                    <Stop
                        offset={0.0859375}
                        stopColor="#77BC43"
                    />
                    <Stop
                        offset={0.0898438}
                        stopColor="#77BC43"
                    />
                    <Stop
                        offset={0.09375}
                        stopColor="#76BB43"
                    />
                    <Stop
                        offset={0.0976563}
                        stopColor="#75BB43"
                    />
                    <Stop
                        offset={0.101563}
                        stopColor="#75BB43"
                    />
                    <Stop
                        offset={0.105469}
                        stopColor="#74BA43"
                    />
                    <Stop
                        offset={0.109375}
                        stopColor="#74BA43"
                    />
                    <Stop
                        offset={0.113281}
                        stopColor="#73BA43"
                    />
                    <Stop
                        offset={0.117188}
                        stopColor="#73B943"
                    />
                    <Stop
                        offset={0.121094}
                        stopColor="#72B943"
                    />
                    <Stop
                        offset={0.125}
                        stopColor="#72B943"
                    />
                    <Stop
                        offset={0.128906}
                        stopColor="#71B843"
                    />
                    <Stop
                        offset={0.132813}
                        stopColor="#71B843"
                    />
                    <Stop
                        offset={0.136719}
                        stopColor="#70B844"
                    />
                    <Stop
                        offset={0.140625}
                        stopColor="#70B744"
                    />
                    <Stop
                        offset={0.144531}
                        stopColor="#6FB744"
                    />
                    <Stop
                        offset={0.148438}
                        stopColor="#6FB744"
                    />
                    <Stop
                        offset={0.152344}
                        stopColor="#6EB644"
                    />
                    <Stop
                        offset={0.15625}
                        stopColor="#6EB644"
                    />
                    <Stop
                        offset={0.160156}
                        stopColor="#6DB644"
                    />
                    <Stop
                        offset={0.164063}
                        stopColor="#6DB544"
                    />
                    <Stop
                        offset={0.167969}
                        stopColor="#6CB544"
                    />
                    <Stop
                        offset={0.171875}
                        stopColor="#6CB544"
                    />
                    <Stop
                        offset={0.175781}
                        stopColor="#6BB544"
                    />
                    <Stop
                        offset={0.179688}
                        stopColor="#6BB444"
                    />
                    <Stop
                        offset={0.183594}
                        stopColor="#6AB444"
                    />
                    <Stop
                        offset={0.1875}
                        stopColor="#6AB445"
                    />
                    <Stop
                        offset={0.191406}
                        stopColor="#69B345"
                    />
                    <Stop
                        offset={0.195313}
                        stopColor="#69B345"
                    />
                    <Stop
                        offset={0.199219}
                        stopColor="#68B345"
                    />
                    <Stop
                        offset={0.203125}
                        stopColor="#68B245"
                    />
                    <Stop
                        offset={0.207031}
                        stopColor="#67B245"
                    />
                    <Stop
                        offset={0.210938}
                        stopColor="#67B245"
                    />
                    <Stop
                        offset={0.214844}
                        stopColor="#66B145"
                    />
                    <Stop
                        offset={0.21875}
                        stopColor="#66B145"
                    />
                    <Stop
                        offset={0.222656}
                        stopColor="#65B145"
                    />
                    <Stop
                        offset={0.226563}
                        stopColor="#65B045"
                    />
                    <Stop
                        offset={0.230469}
                        stopColor="#64B045"
                    />
                    <Stop
                        offset={0.234375}
                        stopColor="#64B045"
                    />
                    <Stop
                        offset={0.238281}
                        stopColor="#63AF46"
                    />
                    <Stop
                        offset={0.242188}
                        stopColor="#63AF46"
                    />
                    <Stop
                        offset={0.246094}
                        stopColor="#62AF46"
                    />
                    <Stop
                        offset={0.25}
                        stopColor="#62AE46"
                    />
                    <Stop
                        offset={0.253906}
                        stopColor="#61AE46"
                    />
                    <Stop
                        offset={0.257813}
                        stopColor="#61AE46"
                    />
                    <Stop
                        offset={0.261719}
                        stopColor="#60AD46"
                    />
                    <Stop
                        offset={0.265625}
                        stopColor="#60AD46"
                    />
                    <Stop
                        offset={0.269531}
                        stopColor="#5FAD46"
                    />
                    <Stop
                        offset={0.273438}
                        stopColor="#5FAC46"
                    />
                    <Stop
                        offset={0.277344}
                        stopColor="#5EAC46"
                    />
                    <Stop
                        offset={0.28125}
                        stopColor="#5EAC46"
                    />
                    <Stop
                        offset={0.285156}
                        stopColor="#5DAB46"
                    />
                    <Stop
                        offset={0.289063}
                        stopColor="#5DAB46"
                    />
                    <Stop
                        offset={0.292969}
                        stopColor="#5CAB47"
                    />
                    <Stop
                        offset={0.296875}
                        stopColor="#5CAA47"
                    />
                    <Stop
                        offset={0.300781}
                        stopColor="#5BAA47"
                    />
                    <Stop
                        offset={0.304688}
                        stopColor="#5BAA47"
                    />
                    <Stop
                        offset={0.308594}
                        stopColor="#5AA947"
                    />
                    <Stop
                        offset={0.3125}
                        stopColor="#5AA947"
                    />
                    <Stop
                        offset={0.316406}
                        stopColor="#59A947"
                    />
                    <Stop
                        offset={0.320313}
                        stopColor="#58A947"
                    />
                    <Stop
                        offset={0.324219}
                        stopColor="#58A847"
                    />
                    <Stop
                        offset={0.328125}
                        stopColor="#57A847"
                    />
                    <Stop
                        offset={0.332031}
                        stopColor="#57A847"
                    />
                    <Stop
                        offset={0.335938}
                        stopColor="#56A747"
                    />
                    <Stop
                        offset={0.339844}
                        stopColor="#56A747"
                    />
                    <Stop
                        offset={0.34375}
                        stopColor="#55A748"
                    />
                    <Stop
                        offset={0.347656}
                        stopColor="#55A648"
                    />
                    <Stop
                        offset={0.351563}
                        stopColor="#54A648"
                    />
                    <Stop
                        offset={0.355469}
                        stopColor="#54A648"
                    />
                    <Stop
                        offset={0.359375}
                        stopColor="#53A548"
                    />
                    <Stop
                        offset={0.363281}
                        stopColor="#53A548"
                    />
                    <Stop
                        offset={0.367188}
                        stopColor="#52A548"
                    />
                    <Stop
                        offset={0.371094}
                        stopColor="#52A448"
                    />
                    <Stop
                        offset={0.375}
                        stopColor="#51A448"
                    />
                    <Stop
                        offset={0.378906}
                        stopColor="#51A448"
                    />
                    <Stop
                        offset={0.382813}
                        stopColor="#50A348"
                    />
                    <Stop
                        offset={0.386719}
                        stopColor="#50A348"
                    />
                    <Stop
                        offset={0.390625}
                        stopColor="#4FA348"
                    />
                    <Stop
                        offset={0.394531}
                        stopColor="#4FA248"
                    />
                    <Stop
                        offset={0.398438}
                        stopColor="#4EA249"
                    />
                    <Stop
                        offset={0.402344}
                        stopColor="#4EA249"
                    />
                    <Stop
                        offset={0.40625}
                        stopColor="#4DA149"
                    />
                    <Stop
                        offset={0.410156}
                        stopColor="#4DA149"
                    />
                    <Stop
                        offset={0.414063}
                        stopColor="#4CA149"
                    />
                    <Stop
                        offset={0.417969}
                        stopColor="#4CA049"
                    />
                    <Stop
                        offset={0.421875}
                        stopColor="#4BA049"
                    />
                    <Stop
                        offset={0.425781}
                        stopColor="#4BA049"
                    />
                    <Stop
                        offset={0.429688}
                        stopColor="#4A9F49"
                    />
                    <Stop
                        offset={0.433594}
                        stopColor="#4A9F49"
                    />
                    <Stop
                        offset={0.4375}
                        stopColor="#499F49"
                    />
                    <Stop
                        offset={0.441406}
                        stopColor="#499E49"
                    />
                    <Stop
                        offset={0.445313}
                        stopColor="#489E49"
                    />
                    <Stop
                        offset={0.449219}
                        stopColor="#489E4A"
                    />
                    <Stop
                        offset={0.453125}
                        stopColor="#479D4A"
                    />
                    <Stop
                        offset={0.457031}
                        stopColor="#479D4A"
                    />
                    <Stop
                        offset={0.460938}
                        stopColor="#469D4A"
                    />
                    <Stop
                        offset={0.464844}
                        stopColor="#469C4A"
                    />
                    <Stop
                        offset={0.46875}
                        stopColor="#459C4A"
                    />
                    <Stop
                        offset={0.472656}
                        stopColor="#459C4A"
                    />
                    <Stop
                        offset={0.476563}
                        stopColor="#449C4A"
                    />
                    <Stop
                        offset={0.480469}
                        stopColor="#449B4A"
                    />
                    <Stop
                        offset={0.484375}
                        stopColor="#439B4A"
                    />
                    <Stop
                        offset={0.488281}
                        stopColor="#439B4A"
                    />
                    <Stop
                        offset={0.492188}
                        stopColor="#429A4A"
                    />
                    <Stop
                        offset={0.496094}
                        stopColor="#429A4A"
                    />
                    <Stop
                        offset={0.5}
                        stopColor="#419A4A"
                    />
                    <Stop
                        offset={0.503906}
                        stopColor="#41994B"
                    />
                    <Stop
                        offset={0.507813}
                        stopColor="#40994B"
                    />
                    <Stop
                        offset={0.511719}
                        stopColor="#40994B"
                    />
                    <Stop
                        offset={0.515625}
                        stopColor="#3F984B"
                    />
                    <Stop
                        offset={0.519531}
                        stopColor="#3F984B"
                    />
                    <Stop
                        offset={0.523438}
                        stopColor="#3E984B"
                    />
                    <Stop
                        offset={0.527344}
                        stopColor="#3E974B"
                    />
                    <Stop
                        offset={0.53125}
                        stopColor="#3D974B"
                    />
                    <Stop
                        offset={0.535156}
                        stopColor="#3D974B"
                    />
                    <Stop
                        offset={0.539063}
                        stopColor="#3C964B"
                    />
                    <Stop
                        offset={0.542969}
                        stopColor="#3C964B"
                    />
                    <Stop
                        offset={0.546875}
                        stopColor="#3B964B"
                    />
                    <Stop
                        offset={0.550781}
                        stopColor="#3A954B"
                    />
                    <Stop
                        offset={0.554688}
                        stopColor="#3A954C"
                    />
                    <Stop
                        offset={0.558594}
                        stopColor="#39954C"
                    />
                    <Stop
                        offset={0.5625}
                        stopColor="#39944C"
                    />
                    <Stop
                        offset={0.566406}
                        stopColor="#38944C"
                    />
                    <Stop
                        offset={0.570313}
                        stopColor="#38944C"
                    />
                    <Stop
                        offset={0.574219}
                        stopColor="#37934C"
                    />
                    <Stop
                        offset={0.578125}
                        stopColor="#37934C"
                    />
                    <Stop
                        offset={0.582031}
                        stopColor="#36934C"
                    />
                    <Stop
                        offset={0.585938}
                        stopColor="#36924C"
                    />
                    <Stop
                        offset={0.589844}
                        stopColor="#35924C"
                    />
                    <Stop
                        offset={0.59375}
                        stopColor="#35924C"
                    />
                    <Stop
                        offset={0.597656}
                        stopColor="#34914C"
                    />
                    <Stop
                        offset={0.601563}
                        stopColor="#34914C"
                    />
                    <Stop
                        offset={0.605469}
                        stopColor="#33914C"
                    />
                    <Stop
                        offset={0.609375}
                        stopColor="#33904D"
                    />
                    <Stop
                        offset={0.613281}
                        stopColor="#32904D"
                    />
                    <Stop
                        offset={0.617187}
                        stopColor="#32904D"
                    />
                    <Stop
                        offset={0.621094}
                        stopColor="#318F4D"
                    />
                    <Stop
                        offset={0.625}
                        stopColor="#318F4D"
                    />
                    <Stop
                        offset={0.628906}
                        stopColor="#308F4D"
                    />
                    <Stop
                        offset={0.632813}
                        stopColor="#308F4D"
                    />
                    <Stop
                        offset={0.636719}
                        stopColor="#2F8E4D"
                    />
                    <Stop
                        offset={0.640625}
                        stopColor="#2F8E4D"
                    />
                    <Stop
                        offset={0.644531}
                        stopColor="#2E8E4D"
                    />
                    <Stop
                        offset={0.648438}
                        stopColor="#2E8D4D"
                    />
                    <Stop
                        offset={0.652344}
                        stopColor="#2D8D4D"
                    />
                    <Stop
                        offset={0.65625}
                        stopColor="#2D8D4D"
                    />
                    <Stop
                        offset={0.660156}
                        stopColor="#2C8C4E"
                    />
                    <Stop
                        offset={0.664063}
                        stopColor="#2C8C4E"
                    />
                    <Stop
                        offset={0.667969}
                        stopColor="#2B8C4E"
                    />
                    <Stop
                        offset={0.671875}
                        stopColor="#2B8B4E"
                    />
                    <Stop
                        offset={0.675781}
                        stopColor="#2A8B4E"
                    />
                    <Stop
                        offset={0.679688}
                        stopColor="#2A8B4E"
                    />
                    <Stop
                        offset={0.683594}
                        stopColor="#298A4E"
                    />
                    <Stop
                        offset={0.6875}
                        stopColor="#298A4E"
                    />
                    <Stop
                        offset={0.691406}
                        stopColor="#288A4E"
                    />
                    <Stop
                        offset={0.695313}
                        stopColor="#28894E"
                    />
                    <Stop
                        offset={0.699219}
                        stopColor="#27894E"
                    />
                    <Stop
                        offset={0.703125}
                        stopColor="#27894E"
                    />
                    <Stop
                        offset={0.707031}
                        stopColor="#26884E"
                    />
                    <Stop
                        offset={0.710938}
                        stopColor="#26884E"
                    />
                    <Stop
                        offset={0.714844}
                        stopColor="#25884F"
                    />
                    <Stop
                        offset={0.71875}
                        stopColor="#25874F"
                    />
                    <Stop
                        offset={0.722656}
                        stopColor="#24874F"
                    />
                    <Stop
                        offset={0.726563}
                        stopColor="#24874F"
                    />
                    <Stop
                        offset={0.730469}
                        stopColor="#23864F"
                    />
                    <Stop
                        offset={0.734375}
                        stopColor="#23864F"
                    />
                    <Stop
                        offset={0.738281}
                        stopColor="#22864F"
                    />
                    <Stop
                        offset={0.742188}
                        stopColor="#22854F"
                    />
                    <Stop
                        offset={0.746094}
                        stopColor="#21854F"
                    />
                    <Stop
                        offset={0.75}
                        stopColor="#21854F"
                    />
                    <Stop
                        offset={0.753906}
                        stopColor="#20844F"
                    />
                    <Stop
                        offset={0.757813}
                        stopColor="#20844F"
                    />
                    <Stop
                        offset={0.761719}
                        stopColor="#1F844F"
                    />
                    <Stop
                        offset={0.765625}
                        stopColor="#1F8350"
                    />
                    <Stop
                        offset={0.769531}
                        stopColor="#1E8350"
                    />
                    <Stop
                        offset={0.773438}
                        stopColor="#1D8350"
                    />
                    <Stop
                        offset={0.777344}
                        stopColor="#1D8250"
                    />
                    <Stop
                        offset={0.78125}
                        stopColor="#1C8250"
                    />
                    <Stop
                        offset={0.785156}
                        stopColor="#1C8250"
                    />
                    <Stop
                        offset={0.789063}
                        stopColor="#1B8250"
                    />
                    <Stop
                        offset={0.792969}
                        stopColor="#1B8150"
                    />
                    <Stop
                        offset={0.796875}
                        stopColor="#1A8150"
                    />
                    <Stop
                        offset={0.800781}
                        stopColor="#1A8150"
                    />
                    <Stop
                        offset={0.804687}
                        stopColor="#198050"
                    />
                    <Stop
                        offset={0.808594}
                        stopColor="#198050"
                    />
                    <Stop
                        offset={0.8125}
                        stopColor="#188050"
                    />
                    <Stop
                        offset={0.816406}
                        stopColor="#187F51"
                    />
                    <Stop
                        offset={0.820313}
                        stopColor="#177F51"
                    />
                    <Stop
                        offset={0.824219}
                        stopColor="#177F51"
                    />
                    <Stop
                        offset={0.828125}
                        stopColor="#167E51"
                    />
                    <Stop
                        offset={0.832031}
                        stopColor="#167E51"
                    />
                    <Stop
                        offset={0.835938}
                        stopColor="#157E51"
                    />
                    <Stop
                        offset={0.839844}
                        stopColor="#157D51"
                    />
                    <Stop
                        offset={0.84375}
                        stopColor="#147D51"
                    />
                    <Stop
                        offset={0.847656}
                        stopColor="#147D51"
                    />
                    <Stop
                        offset={0.851563}
                        stopColor="#137C51"
                    />
                    <Stop
                        offset={0.855469}
                        stopColor="#137C51"
                    />
                    <Stop
                        offset={0.859375}
                        stopColor="#127C51"
                    />
                    <Stop
                        offset={0.863281}
                        stopColor="#127B51"
                    />
                    <Stop
                        offset={0.867188}
                        stopColor="#117B51"
                    />
                    <Stop
                        offset={0.871094}
                        stopColor="#117B52"
                    />
                    <Stop
                        offset={0.875}
                        stopColor="#107A52"
                    />
                    <Stop
                        offset={0.878906}
                        stopColor="#107A52"
                    />
                    <Stop
                        offset={0.882813}
                        stopColor="#0F7A52"
                    />
                    <Stop
                        offset={0.886719}
                        stopColor="#0F7952"
                    />
                    <Stop
                        offset={0.890625}
                        stopColor="#0E7952"
                    />
                    <Stop
                        offset={0.894531}
                        stopColor="#0E7952"
                    />
                    <Stop
                        offset={0.898438}
                        stopColor="#0D7852"
                    />
                    <Stop
                        offset={0.902344}
                        stopColor="#0D7852"
                    />
                    <Stop
                        offset={0.90625}
                        stopColor="#0C7852"
                    />
                    <Stop
                        offset={0.910156}
                        stopColor="#0C7752"
                    />
                    <Stop
                        offset={0.914063}
                        stopColor="#0B7752"
                    />
                    <Stop
                        offset={0.917969}
                        stopColor="#0B7752"
                    />
                    <Stop
                        offset={0.921875}
                        stopColor="#0A7653"
                    />
                    <Stop
                        offset={0.925781}
                        stopColor="#0A7653"
                    />
                    <Stop
                        offset={0.929688}
                        stopColor="#097653"
                    />
                    <Stop
                        offset={0.933594}
                        stopColor="#097653"
                    />
                    <Stop
                        offset={0.9375}
                        stopColor="#087553"
                    />
                    <Stop
                        offset={0.941406}
                        stopColor="#087553"
                    />
                    <Stop
                        offset={0.945313}
                        stopColor="#077553"
                    />
                    <Stop
                        offset={0.949219}
                        stopColor="#077453"
                    />
                    <Stop
                        offset={0.953125}
                        stopColor="#067453"
                    />
                    <Stop
                        offset={0.957031}
                        stopColor="#067453"
                    />
                    <Stop
                        offset={0.960938}
                        stopColor="#057353"
                    />
                    <Stop
                        offset={0.964844}
                        stopColor="#057353"
                    />
                    <Stop
                        offset={0.96875}
                        stopColor="#047353"
                    />
                    <Stop
                        offset={0.972656}
                        stopColor="#047253"
                    />
                    <Stop
                        offset={0.976563}
                        stopColor="#037254"
                    />
                    <Stop
                        offset={0.980469}
                        stopColor="#037254"
                    />
                    <Stop
                        offset={0.984375}
                        stopColor="#027154"
                    />
                    <Stop
                        offset={0.988281}
                        stopColor="#027154"
                    />
                    <Stop
                        offset={0.992187}
                        stopColor="#017154"
                    />
                    <Stop
                        offset={0.996094}
                        stopColor="#007054"
                    />
                    <Stop
                        offset={1}
                        stopColor="#007054"
                    />
                </LinearGradient>
            </Defs>
        </Svg>
    );
}

export default Logo;
