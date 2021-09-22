import React from 'react';
import './TableLeft.scss';

import {  Input } from 'antd';
import { SearchOutlined } from '@ant-design/icons';
import CardMini from '../CardMini';

var users = [
    {
        "id": 1,
        "name":"Kathryn Murphy",
        "type":"Design",
        "sales":"$1,902.00",
        "img":"https://s3-alpha-sig.figma.com/img/7e45/5474/3be62c531539897e1f659181281c4efe?Expires=1633305600&Signature=MGX-FURZUb9trEiWPh~bu-XaPl0MC5aJK4kmRw~1CaBfS7tPizuC72Cz4QZ6BLGEteLB2HzP5Rwm64P2od-c6MtcQJhBeJfa4eGGv~TVIZl9j8iQ1y2W8-IpGSXIVi2O-31a7GScmI5EhrKWJdTiVzmgubD266RF4dC9Ecezxad--ruuC2FUpCtxxcX8J8rFgLDBK9ambj2gtEQ7-jnccZHj7i8sM~0b8dDzBEfc9T05LUnQcEM8ssKGtkllWdSeuls37U9swMyfSLhDI~TrHlwy2FbKPTwfcXPXan9GhWJVM74FuNQGB2gmZbz25oKc418YJJgOP4h0uJngdsmKdg__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA"
        // "img":"https://s3-alpha-sig.figma.com/img/7e45/5474/3be62c531539897e1f659181281c4efe?Expires=1632096000&Signature=DPVbtxI-tPPV6OeLnwZMYrhtUy4yaS4c90UFn4S5afE-V8Oi~B1jsifPrp~s0oSIeTkJcrNVp-aicG1kNZ-MEAfrfOTK8~c6PMhTVoVlwWqIGXCq9Ad4RtH0aTwe-5qi8U3Bir1cAfWO~PUasrZu1yirMVPhbd~8TYlLKzy0CIBFBNjEswxTVyhQVcDguq6zd~FxJDdfCn7uapIg1BHYEWEIapP5K6rug~PyaKku4GGY9O4CP5b7HmBO1U9CNydyOiPRcwGSxKjc5RLa3ar2yxhJ5PU1SJGy35jsdOPeYJDvOYx-xnhG6AUYmZYB9tSaFXFW6FZY-F4bE~FX6dd4-A__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA"
    },
    {
        "id": 2,
        "name":"Ralph Edwards",
        "type":"Sales",
        "sales":"$2,794.00",
        "img":"https://s3-alpha-sig.figma.com/img/2c52/1d93/a6285d8dcf019c1c8dafd5c7325547c4?Expires=1633305600&Signature=IgfnBSecDYpW9UDzOuE14SOokGBoPcsgKXUO8LZup73qGTbikqAr2PM3WyVkdQnCI9oK1duJkfxA~edPjRqKzaM3oATYMLzfh2LElW56ct37euv3Od83ND1ztjCFbiSWI1oH5GE3wI~x7Ayy6sk1FokomnbxNxiTxARJe945kvqkb3eXq7hBiOAoKecGHeKWaUysWBYz6Uv9uJ378LL~6t625xiD6YYYibW5ys8yC4TPb6umEiGFh6BwzP9DKIMdiMOL2L1iUqi1cISlm9rZMGWYzayrE10svz1ZCrwOUmY1B82BMYUDjmmk1tcVPcTsBwMqqyqKespYz5DIb0jv4g__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA"
        // "img":"https://s3-alpha-sig.figma.com/img/2c52/1d93/a6285d8dcf019c1c8dafd5c7325547c4?Expires=1632096000&Signature=bXy5nMP-2VINABbCIXqM9qNUwpY7FE2-e6jDvA2CNADCGeWcjNxlpHLEICpMClLKVJkMLbdCRWi0GL-Bw0q~mySewr14FUlpIg~~TdKueP6-7azlAoAowebF~rbth5KqtiGWaN1mC94UgVVDVEowtpTPcxPOITQVYx9tfsxVLQgMF0Yrso4xOPQ81pTp9pUkFqEaIEeW2jOcQCTcCdzv7cKlk4jIavFd0fvrNIfN6NPfFb3oaQxGWNXvtzaieqS0C9gJ408gI6pOJZD~kt29uDcZXhlz2H4ksA8cEEWuGtqKaaHoT16hnicLo30SzeKIRRtj~t8C8ScHYSSt-a-8tw__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA"
    },
    {
        "id": 3,
        "name":"Albert Flores",
        "type":"Marketing",
        "sales":"$0.00",
        "img":"https://s3-alpha-sig.figma.com/img/4ad0/a40e/d9268c26965c3c921bc23c8c9ef67000?Expires=1633305600&Signature=Qiu7RPJ~swTY4i9RruMlJajjBb3J-2xAca~UiXRWbbuq8dmlw7u241aAWRVvOD0T2sfQqVKHJynPWnZwypEa1WJVFQL7tjnI2SXgN-NIZuc1v~QuA0Wr862MuaxPYD7CO~~XWEhZAB~tqnPvqgbmkpg2Rz6J3k8flxIvcQuYts8P3MXihNZwD6vplDqQ3zvBj-T~VcB4~LExB3zBObp23dwKXaXQ2CjE24wP0PwT8xz9fcL0bWy-dVIjZ2kdaEYyC0qFTank1sA9aqvaKq1IDNv2UJOUJ2URcaiXEaclqlayBP3ahb2NL1xXKJaEfvwmC7MpZrmGt5sFsaoD0YfMKQ__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA"
        // "img":"https://s3-alpha-sig.figma.com/img/4ad0/a40e/d9268c26965c3c921bc23c8c9ef67000?Expires=1632096000&Signature=hsg5KroXvfVqZ4U9IxnKI7sUlZAcFJ8vIkliuIdX03oHmXNeRNc8UxA0F9mwyze8lMOn5vzcbYtfUAbfvIyKbfaDfVCPf8T-5xs3IrL-5fH8tEjwhv28Oqew3YsRR~hHO8XUCjE0QvKUQRtMUDowF2v282jrqV9zii0R7ay13hBFpdFL9~6rz9TgStRJ~kNphe-iF3Fd3kGxmaWl8Vu33vPDRoVykcX5M3A9hK3vMlI~dcOPBcH-TteGGivYC--9PWx3RwiZ7D0SBwGo-zaaaHKwMFan7oAjRieS7vBHBCwi-fOer3naeBSaVoRT1UhL69HWjaIeylygoJNJysy~wA__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA"
    },
    {
        "id": 4,
        "name":"Jane Cooper",
        "type":"Design",
        "sales":"$762.00",
        "img":"https://s3-alpha-sig.figma.com/img/799a/b3d4/73b6848d4a1addbb574f6d847cdac5c4?Expires=1633305600&Signature=PetcQERL5lWl3RvAi~DFX1vnIxCkh1Bq9NvI9H3qeUhd2gDfM0KbseBLS9Jx42Xgrz7uDo77XUHNPzehO1f2YPG~4mombB6PY7sWiwg8fM1y5YkLL1KjsWxY2VMV5R8nu66v-KcyPtPF2cTPC3jHO1MV1gvMijAgwK-wFGgd6MBpg~M2CmcbKoobY3k-v9D6k8uCG3M2IrmdX7Y2nJboJcbL8CT3V1stRVSx2bEXcnKTc9Y9YNfxgAkkvXAV9Aq6h9r2A566qiMybI62nuX39tDl4OlFqNcWsTMqWXdLfkDKsMCG-ZuCp7J5l2t~6iahautBBiyvR~yy2vPGof0TDg__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA"
        // "img":"https://s3-alpha-sig.figma.com/img/799a/b3d4/73b6848d4a1addbb574f6d847cdac5c4?Expires=1632096000&Signature=eyicNrdmmRnTaIa~8spOOEJBeKS0H80ar8eOLyhxeSSfz1PTJbgIAk6veAaPEFi~JzRnLieN5CRcMGD5VzUZxryIYLukfRbADu0NwytBFEMJhnsgA3XsRncvpXMtW2NImz4ZAZP01aUgamVn9-dw6IsXLR28NahOTu0IsuNqiO9PbpsSiV2pKe3U49qsibzci0X827fm8PwYnQatOs0NYTEI1x6n9Kn~ketHqSWxPX5M3wJIjBDl8OzZFa2-Xh6DkQOX8Kao6mzYR7g7smDqicXkIxfaM-Utv1bWuaK9vs3RoYnjQgO~mZQR3uiK3TdYW9PB96L3DFil1BPKOVRlow__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA"
    },
    {
        "id": 5,
        "name":"Ronald Richards",
        "type":"Sales",
        "sales":"$0.00",
        "img":"https://s3-alpha-sig.figma.com/img/984a/5406/17fb266e17da3fa4678ae0d5bd4ec9b0?Expires=1633305600&Signature=G8707rIUoVMw7Ru2Y7TCvVZlJaHjxw9rWfw0C~ed7xJsoS8tFg7Ue6aVtN0T5blHgwnTjSrC2x58A3qgHVkA3N~-v-i1T5FOsh-D8ADLI~WDAqI7tY9GPJg3cGCFXligmpyGzgk9F8HMdCxu4YzTECpyCkdZehyDuTiyeck5OKDOZZxVyNNaWkIOy3raRoGmYsEblPrVN0jnN3w7kabJxNbeVffJMTXQMgOmvOXk4~sdF0s5rpZCaeYrXHC53WDuZskadGHv166L0rP9hNrth8pfcDfnBfOoWZuX9xbAnsGaG1LDC0x6lVGQve7BnU7cyCXHCLI-LSUT2jITwF57Dg__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA"
        // "img":"https://s3-alpha-sig.figma.com/img/984a/5406/17fb266e17da3fa4678ae0d5bd4ec9b0?Expires=1632096000&Signature=VwKQGBWjCwfB3PUZZvBVLf0TSR93wnlcKyPtRW3rbvxSdOjxT83O-wE3PzzRoZW5yzS6sfDnnmfcRJanSrU1542SPHnG3JybIwXKeejf3IUvxmI48w1WYW8qb5kSWHl1IdHzW7lvievc5vpgTkqUU7nujj5whQgn~Mtm1x7xZspRu6y1Z-I5tx9mdHjY0PJH2~9B659VccOEhDTBnStcW3~MYlkLUmb-OzAoFX3oq82Cyv1hAP08etBRA-jHNGlKdbPIxiXs0RUriDLrxwtBV~dpMtSrViX7YSZQSKerLeelOEa6yZVAl2kbroPvMiL8G6UZCAc0y9D4r7dG56gBKA__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA"
    }
]

function TableLeft(props) {
    return (
        <div className="table__left">
            <p>USERS</p>
            <div className='table__search'>
                <Input size="40" placeholder="Search" prefix={<SearchOutlined />} />
            </div>
            {
                users.map((item, key) => {
                    if (item) {
                        return (
                            <CardMini img={item.img} name={item.name} type={item.type} sales={item.sales} />
                        )
                    }

                })
            }
        </div>
    );
}

export default TableLeft;
