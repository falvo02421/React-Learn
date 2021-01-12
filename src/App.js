import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import './App.css';
import { Jumbotron, Button } from 'reactstrap';
import { Container, Row, Col } from 'reactstrap';
import SepatuAdidas from './components/SepatuAdidas'
import SepatuNike from './components/SepatuNike'
import NavigasiMenu from './components/Navibar'
import FooterBar from './components/Footbar'
import SilderZara from './components/sliderZara'

class App extends Component {
  constructor() {
    super()
    this.state = {
      jenisSepatu: 'Adidas', 
      sepatuSantai: [
        { 
          nama: 'Adidas Neo',
          img: 'https://s1.bukalapak.com/img/1219690952/w-1000/SEPATU_ADIDAS_NEO_BASELINE_BLACK_WHITE_ORIGINAL_SEPATU_ADIDA.jpg', 
          harga: 354999, 
          color: 'black',
          merk: 'Adidas', 
          stok: 20 
        },
        { 
          nama: 'Adidas Lite Racer', 
          img: 'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxMSDxUTEhIVFRAQFhcVGRgWGBIWGBUVFRUYFxYVFxgZHighGholGxMXITMhJikrLi4uFyIzODMsNyguLy0BCgoKDg0OGxAQGzciHyYvLS03LTEwLy03LS0tLS0tLS0tKzMxLy0rLTMtLi0tLS0tLS8rLy0tLS0tLy0tLS0tN//AABEIAOEA4QMBIgACEQEDEQH/xAAcAAEAAQUBAQAAAAAAAAAAAAAABQECBAYHAwj/xABEEAABAwIEAwYDAwgIBwEAAAABAAIRAyEEEjFBBVFhBhMiMnGBB0KRUqGxFCMzYoKSwfBDVHKDorLC0RYkNESj4fEV/8QAGgEBAAMBAQEAAAAAAAAAAAAAAAIDBAEFBv/EACkRAQACAgAFBAEFAQEAAAAAAAABAgMRBAUSITETQVGRIkJhcaHwgTL/2gAMAwEAAhEDEQA/AO4oiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICKhVAUFyKkogqioiCqKkrnPxW7aVuHvw7WNe2jVkuqtDXQWm1O4jS/NcmdQnjp126d6/l0dFrfY7tQzG0h4gagEmNHD7Tf4jZbHKVmJjcGTHbHbpt5VREXUBERAREQEREBERAREQEREBERAREQEKIg5x8UcfVq4nB8Lo1HUhxB572o0w4UmXLWnmQHfQDQlZ9XDt4fjMDQwxc2nX7xjmOe94cGZfGcxPi8Rvuvf4j8CfWpU8Vh/+s4e7vqX6wbBfTI3kD+G60vtn25p1fyHEYUj8oFOo86E0c8MLCNM2Zjtfszuq7zqG3hKdeSK+0xP3qXZAi4fwPttimAg1XEiD45cHA8w7Q22XVOyXHxjKGeAHsOVwGkxII6ELlMsWnXulxXL8uCvXPePmE4iIrWAWFxjC0alB7cQxj6GUlweAWwBJJnks1aR8UuL91hm0GmH4k3uBFJl3+xs33Kje3TXa7h8VsuWtK+7mnBMWMHjxUw7CzCPqZmMlxytNol2gcD9Y5Lu/DeIU67M9NwI35g8iNiuENxIYRIsInpNpI5SDtureHcZrYau+tSqy77OgI+VrgRERDbk3M9Fkw5u87fQcw5dF6VnHHeO3/H0Ki4/xD4t1m0xloUmuyiXOLyM28UxFv2ltPw17aP4iyqKrGsq0Mh8MgOa/NBgkwZYdzstUXrM6h4eTg8uOvVaG7oiKbKIiICIiAiIgIiICIiAiIgIiICIiDzr1A1pc4w1oJJ5ACSvlOg5r6j3NblbUe50WsHuJH0B+5fQPxY4kaHCK5HmrAUR/enK7/DmXz/g4A6fw6RvAKozS9jlVPNkvQNhsTLfZ0uHsHgjTdbd8Nu0TcNiC2qYpVQGk7NcPK49Lke60uhUIsd7QJ1123zMPPVZDhJzNMHmLg+o1Go/2WXc1t1Q+inHjzYrYr+JfSVKoHAFpBB0IIIPuFfK+csJxOtSPge9h506jmfUSAfos9/azGxDcdiGn+5d/mafxWmvER7w8LLyHLXvS0T/Tvj3AAkkADUmwC4T234yMRxCs9rg6nTijTynUUwcxBHNz3GZA6rU8eMRiXE4rGVq7SZDXPfltfyzlGmgCyqWGa2wENFvYQDvyc0/wUM2SLRqF3LeCtw95yZPjT0pkud0ufSbmBYDe5iY3WTisM9zGCkASHCW2uNczZgFswZA+bdWMdGguOXPp6PbsN1e2pJiPCT7GbtE/NIzC5NwLKiI09W9pv/DxrYRrGve6HgB2YmIPRp2kWiTpoF6dneL18GHPw2rmgEA3MXbPhOYCXW1v9ckUw4ZXDM1wINrkEXi1vCQ4QGiZVtOkxrQxslrbS4iXEuMSR4SdRAzGwUonSm1YvGreHTfhz2//AP0CaVSn3dZjMxv5odlcI2IkfXQLe5XzHwyo7vnFry17ajnSC4OAktnmNtbX2UoztHjaeMp1nYmq5rHAkGo6HNaRNPL5SCDExvNitFc3tLx8vK5t+dJ1+z6JRc0xPxgw7GtP5NWM63piDJEC/i0W59mO0VHHYcVqBOWcpDhDmuAByn2IMi11dFonw8vJw+THG7RpMIqSqqSkREQEREBERAREQEREBERBzz441gOFtZvVr0wP2czv9K4rQw8RDtefqOX82XVvj3X/ADWEp/aqPf8AutDf9a5czTpz5DSf8xWbL5e/y2seltVj3xMSbb6aG+m4G8arIFUCxBA9NjI+4EaR+jKsHXe56TM/c5/Xwr2Y479bddx+81wvPmCpmHqxr5UFcH1199Yn1a4e4XoS2PumdNgb+tN22+qo5jSRYcwfSPFz0LHWje6uFEaBonly6GNLhzbndq5MJx/IyqdhfUDqSHQTrGbM28CHCyqBMWmYAGma0AdSRLbTcBYeIx9KmLuLjybBO2p0BIIPq1RGK41VfMeAH7PmOhu7XUTaNVOmK1mHPx2HD23uWwY3F06Yh79flEZjpfLtLSCC42LVC4rjdR5OTwA76uOh12GYTA0kqNoUnPMMaXHpzPM+ymMHwXeoZ3yt5Rm16tkjTylW9NKeXnTxHFcVOqRqP97rOD4uoHQ0ucJFjca2101P1W00nyLyCRtMgESSTMgGJElo8BUc8spNgkMbyFjtdsCTIyvEQJBEr04VjWvqAG1MGb7mZkDbxSRqRJuozvJ4hopanB1/O+5+GdnF4yZiACQGZiJBjNE5TYiAfWywsfhXucHtLZbYyQ0+KPFmJN4tDjNlsfGOO0SxtOhTAcBHh66yRzsoCi185nOEGwDRYXvBF5kT4Re9wuXxdPus4fjbZ510Tr5YvF8K1zC75qdwYgkTcnmPaLi69eG43FUCH4bE1KYm7ZlpPQGx00Wa1mcFpiN5gNG3iPlaDrfMSF4Ma1gyttqTmN/oYhttzrsVX+WuzXNsNrTFpjfwnaXxaxudlMspSwy9xa/843MBESA063G8LrvA+0OGxjc2HrNqRqAYc3+003H0Xz3WonvWkDw5QLAwNTfSBEEWWbSqFtVtam4sqsvmYYMRoSNuhU4zzHnuzZeU0yxM1/GX0Wi5fwP4j1GnLiWd437bLO9xofuW8cP7T4SsBkrsk7OOR30ctNclbeHh5+CzYZ/Kvb5jumEVrXgiQZHRVlTZVURJQFUKiqEBERARF4YzFNpsL3GAPqTsB1KDkvx8/S4H0r/jSXOKYt0A/mPYR+2sLtp2oxOKx9SpXJGR7mspmwpsBjKAd4AnrKx8Nx5nzNIOvMWv67N+ioyUmZ3D2uA4rFSnRadSnWW0ufxP/stPX84r9td9eXlDXToI/NO3Nio6jxOiYiqBteRF4Bv6MPsVmMxdNws5pEeUOGmUkttp4c7fZqpmJh6lc2O0dph7scDt+z+9Dev9IySdgvYARci29ugB5D+jdudV4NP6w6Eb6eID9x/7yve7p0j6gt95c23Ns7KMrOqJeNbAsfPhgk6DmZIaZGuYPZYa5dJWJR4GwOlzi5usARaM3OxLZIv8pEKQFUXM+4mToSbamA2pA3a5VLr8iPoCHchs15n+zUUovaO21FuFw2t1TWNqOeykwTDGi0t9iY3JnJUbpMkKHxfHibUhl/WOxnN4BsM0kbwYUxYx4eQg9JytP+OmdTcLDr8LpO0aZtGWxI8wtzc2RJ+ZnVSpNY72V8VjzTGsUxENd71zn7vefUkqewHDnwC8xMQ0G5mYBdeJyuFgbiDCy6GGp0mw1sAzJGrhEmDqfAQ8dWlWcRxj2zlY4uvLhMA2c7S4E5XjTzHqpzkme1WOnAUxR6mads8PZTbfyjXQZhBI8J+0yYzmzmaLI4bWFV8vdlpjUg+J37WwJAMDmVpNfGOe6Xkk8theYAFhc6dVLcPw1VwGYljToPmN4FthJAk6SuxjrXvaVduKy5p9PBXUf76bVxntAwtFDDMAYNA0b9TzUGzh0mahLiToCQ0EzqfmNogXnksnDUmgANFnR1zTaHfauC0iQ2YXq10xexgD+AkRyghtpFyo3yzPavZq4flta/lk/Kf99rsggR5RziBOmsgHoA52slHN5i456jY6nw+7h6K0O3m2k+t4kaXvkZfWSq5o1+XoBHMCAQwwRzebFUTD1I7Kmb+/0HWJ06EdVUP9/p9x0VpaYPrvzGkySJ9czugVCN9NrzvJaL3k7AyegXNJxZkYfH1af6Oo9mvkc5t/ZSdHtdjWxGJqe5a6fqCoRzSbx+Okabx6eI9Aru7566dARoCb30t4j6LsTMIWpjt/6rE/8bC3t3jo/Tz6sp/7L3wvxGxrXDMadRvItAJHq2LrVxTH/wB23h2sai1zfQIaY3NuRjTXxToYPzfQKUXt8qZ4Xh7foj6dr7J9rKWOacoLKrfMw8uYO4WxBcm+GA/5iq6/hpiDePONJ/gNl1gLXjtNq7l83xuGuLNNa+FURFNkFqPajEF2KZS+VjM/q5xIn2DfvK25ap2rwZFZlYaRkPsSR+KDUe13YDD8Q8cmjiY/SNAIdyzttPqCD66LnHEvhFxGkSaQpV2jTI8NJHVr4/EruOFqghZtNy6Pl/F9lcdRMVcDXAGpFN7h+80EfeopzmCzmEOFuRHtzX102oUqsa8Q9rXD9YB34oPlTg/CK+Lf3eFo1KjyZOWYAMxmJs0dSV2Psd8KhRipjqpq1NqTCRTHPO7V+g5C266RhaFOk0tp02U2kyQxrWgk6mANV6ppKLzHiUR/wzgv6pR9mgczt6n6rDq9iMA7/t4kR4alUWgt0zcjHsOQWxgIQudMfCcZ8keLT9tNxPw5wjvLUrssRZzHagAnxNmZDTrqFh4n4Ysj81i3NN/NTBEm4IykQQ8Zt9SFvkKsKM4q/C2ONzx+pyzFfDnFtJ7urQeNrvaZHiaLt2cSNdHKLrdj8fT0wznBotldTdoCWjwnk5zDbQtXZSij6NV9eZ5o86lwOvhH0zNSi9pbaalNzXQG6SdCaZI18zF5d8IMnMNToc3h8R6lzMr9DdhX0EHnmsTEcMoVDNShSebXdTYTbS8KM4P3aKc115p9OGuqSb3JmYmTpnib3GWoIAFiqOfczreYmdu80v8AZqAWGq7NV7KYF2uFpjTygs8sx5SOZHusR/YLAHSk9sEaVKnyzAgkiIJHoo+hK6ObYveJcmZUIueodGguA+40AMPADtCVktqQNhE9AB5XAGwaASBaSWuC6Ufhzg5EGsIiPGDZoLYu02ymPSFY/wCGmGm1auNLSw7ZTJyyZbbXZR9Gycc0wfv9OdFwnk7YHw3Fst/KD5TAJNuaq1wHQQebTlNxa5bbkASW9V0AfDOh/Wa//iEmIJJDbkwD6hezfhthrzWr3MiO6AF50ywTM6/aK56NnZ5lg+f6c4zRytYgWA+1YHwgm8TJDyrc4B1AyjXTK02GnlGmkE5dV1Oh2CwTdRUfAgS8iPQNiDFpF7BSOG7L4KnGXDU5aZBcC8g3v4pvc36qXo2V25rh9omXHGEucG02kvMw1oMweQbcDxaNuYu5bBw3sTjKsOcwUWfrmDHRoBi3O/ULqtJjGCGMa0cmgNH0CvaC4wFOMEe7Lk5tf9Ea/tD9muzzMI0ta4vqVS3O42mOQ2FzqStrCx8Nhstzd34eiyQrYiI7Q82+S2S3VbvIiIuoC861Fr2lrhLTsvREGv4jgTmmaZkdbEf7ryfRezzNtz2WyqjhOq7sa6KivD1NOwrD8o+io7CMPyj8E2IkPVc6lBgmcvvKOwbDtHpZNiL7xO8UqzCsGjfrdV/JWa5QmxEmoqd4po0WkRAj0Vow7QZyiU2IbvFaaimnYZhMlolH4Zh1aLe34JsQveqveqYbg2AzlHLmrTgWfZ+8psRQqBXd4FJnAsiI/GfqqDAM5H6psYIqKveLPfgmHaPRGYNg2n1TYwO8Ve8Wf+RsnT8V6tpgCALJsRjCTYBev5K/os8BVTYxqeDb81z/ADsvdrQLCwVyLgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiLG4hjqdFmeo9rGzALjALjoEFnEuJ0cOzPWqsptJDQXuDQXEwAJ3laT2J7f1MVxHEYPFUW0KrCe7YCSfzZIqMc4+Z2jgQACJ5SdQ7XUq/EKeXE1sC6uXtdhTh3uc1tOo0F9Oq5zQcjmZHB1zMWghYON4PWNWhiGYzBsx+DbT72qar+6qlucUXhwZLnmnReHiIytBm5Qd/RR/CuK06zYbUY6o1rS8MdmDSReDAkSCJ6bKQQEREBERAREQEREBERAREQEREBERAREQEREBERAREQFg8U4a2uGS57HUn52PYQHMdlcwkSCLte5twbOWciDVmdhcOGsZnrd1TIcGF4LS8NDM5lsyWtAN43iSVc3sVREkVsQHZG0muztllFge0Umy3yxUIkybAzIlbOiCG4L2cpYWo59Mvmo0NIcWxA3sBJ6uk7CBZTKIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgtfovNEXXBERAREQEREBERAREQEREBERAREQEREBERAREQEREBX00RBeiIuOv/Z',
          harga: 239999,
          color: 'red',
          merk: 'Adidas', 
          stok: 1 
        },
        {
          nama: 'Adidas Superstar', 
          harga: 359999, 
          img: 'https://assets.adidas.com/images/w_600,f_auto,q_auto/4e894c2b76dd4c8e9013aafc016047af_9366/Superstar_Shoes_White_FV3284_01_standard.jpg',
          color: 'black',
          merk: 'Adidas', 
          stok: 7
        },{ 
          nama: 'Nike Air', 
          harga: 544999,
          color: 'green',
          merk: 'Nike', 
          stok: 1 
        },
        {
          nama: 'Nike Sport Air Max', 
          harga: 699999, 
          color: 'Red',
          merk: 'Nike', 
          stok: 7
        }
      ],
      sweater: [
        {
          nama: 'V-Neck Yellow', 
          harga: 354999, 
          color: 'black',
          merk: 'Nike', 
          stock: 20
        }
      ],
      namaPembeli: '',
      jumlahBayar: '',
      jenisPembayaran: '',
    }
  }

  handleSet = (event) => {
    var name = event.target.name;
    var value = event.target.value
    this.setState({ [name] : value })
  }

  render() {
    return (
      <div className="App">
        <NavigasiMenu></NavigasiMenu>
        <SilderZara></SilderZara>
        <h1 className="fonttitle" style={{marginTop:"3rem"}}>{this.state.jenisSepatu}</h1>
        <Container style={{marginTop:"1rem"}}>
          <Row xs="4">
            { this.state.sepatuSantai.map((merks) => 
              <SepatuAdidas
                img={merks.img}
                nama={merks.nama} 
                harga={merks.harga}
                stok={merks.stok}
                merk={merks.merk}
              />
            )}
          </Row>
        </Container>

        <Container style={{marginTop:"1rem"}}>
          <Row xs="4">
            {/* { this.state.sepatuSantai.map((merks) => 
              <SepatuNike
                img={merks.img}
                nama={merks.nama} 
                harga={merks.harga}
                stok={merks.stok}
                merk={merks.merk}
              />
            )} */}
          </Row>
        </Container>
        <FooterBar></FooterBar>
      </div>
    );
  }

}

export default App;
