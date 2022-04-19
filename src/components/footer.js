import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="footer">
      <div className="row align-items-end text-center">
        <div className="nav-button col">
          <Link to="/">
            <div>
              <img
                className="nav-button-icon"
                alt="home"
                src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFoAAABaCAYAAAA4qEECAAAABmJLR0QA/wD/AP+gvaeTAAACjklEQVR4nO3bLWwUURTF8T9NU0wTUE0FhgRMwdQhKuoJGofEIrEYAghoaosDhy0OUUOCaBM0ag0NZluCIW2gLeLNJs3Qj92Z+8587Pklz2zSefed6cx9M9uCmZmZmZmZ1bYEbADfi7FRfGZBVoAPwF/gpDSOgU/Ag8aq67gZUnhf+D/c88ZX4BEw20C9nTMPPAa+MX7A5TEAngLXxLV3wgLwDBhSPeDy+AWsAzeE62itW6QwfhMXcHkcAu+AO6I1tcpFDS7XmJrGWaXB5Rq9bJwRDS7X6EXjXASeA3vEBbMPvCjGfuBx94paF7MkkUmOBjf6zbt+ap4cV0onGmeOBjfOvTTHvb91jTNXg/tMtUWuAJukoJQnO5ucl+3dgPpuk+/2JWmcXXuCG9Ub2ZCzPnHOAWvAQWDBA+AJ6erIbb6YaxBY/wEpk7nIQt8EFrgDPKSZe95sMffOBPVeNl5HFlj3VnEMfARWI4uqaZVUU93GOYwsqmoRXdiXRuz7w0w6cRdfUdZp9GHGnbAP7w6qbF3DXLY92qa5BpfLqHFuI7xHr50xQRsbXC4XNc7QXcdoH/2TdAbfMp1f9Z/+k4chKeTQfbTZdLpJ2tZ13TppLa2zTHow+UPwdqchJ8AR6ZXrvYZrAeA+sEXGfWVDyuvZIq21sisBBeU4btPC1zVT9QdtMg5axEGLOGgRBy3ioEUctIiDFnHQIg5axEGLOGgRBy3ioEUctIiDFnHQIg5axEGLOGgRBy3ioEUctIiDFnHQIg5axEGLOGgRBy3ioEUctIiDFnHQIg5axEGLOGiRukH/OOOz3ZrHbIPwddUN+v2Yn3VN69Z1FXhFOtu7wEv68U/ofV2XmZmZmZmZmVmIf74Dw5HDc6fuAAAAAElFTkSuQmCC"
              />
              {/* Credit: <a href="https://icons8.com/icon/90075/pavilion">Pavilion icon by Icons8</a> */}
            </div>
            <button>Home</button>
          </Link>
        </div>
        <div className="nav-button col">
          <Link to="/discussions">
            <div>
              <img
                className="nav-button-icon"
                alt="discuss"
                src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFoAAABaCAYAAAA4qEECAAAABmJLR0QA/wD/AP+gvaeTAAAF/klEQVR4nO2dWWxUVRjHf52OWCuNDQFDa0WsBUlMVBYNInGJooj6ZDSpKI0YSKkBo0FN1BA1mugLj8aYEI2JmhgffHCp4QFcAhEj1N0gVbB1KgotZahCWxgfviltJz13Pcud9v6Sf5rcmTnnO/+5c+5ZvnsLKSkpKSkpKSkpKSkpCaXCYd1Z4CrgWqAJuKz4t2aMKoDjwL9AL/B7UT8DXwE/AMO2Ay8HLgIeBbYDeaAQUwNAO9AGXGyxHYlkGvAg8AVwmvjmqnQG2AE0A+daaVlCqAGeBXKYM1elw8Bm4HzjrXRIFtiANNa2wRMZ3gZkjLbYAQuB73BvcKn2AIsMttsaWWALMIh7U1UaBJ7A7UgrFrXAp7g3Mqg+LsZcVjQBv+DevLD6njIaDl6OmxGFLnUD87S7opkFlLfJIzoEXKLZG23MQqbBrk3Spf3ADK0OaeAcZPbl2hzd2g5UavQpNltxb4opvaDRp1gsQ1bKXBtiSkPAEm1uReQ84Ffcm2Fa3yLdozM2TxDUZNUGTZ6FZjrJWCCypRxQrcW5MQRZ1doIXKi74gRTB6yzXWmGyTVmDqr9WF58utNAI8pFN2vw7yx+XUezzsrKjPt0Fub188gAPUyt/nksOaABObtj43VGL2LqmgxQD1yhq7Csx2tLdVVimS7gS2RLrbOoI0h6Q774npG8kZmM5pRcCSxHzuIRliC5I7HxMlrbt2mYYWAn8D6ye9IV4DN9Rf0B7C15bQ6wCrgXSfAxzue4v/J7qRt4GrPdm5X8kAO4N3MiHQLW4HhNQid/497UsRoAngSqTDbaBadwb+6IdgHzzTbXLF4Xw4K1KNQUgBeB55DcuiBkkUSe64CrkRHFXEZHGjA6AjmIjEr2AbuBDhxkp7ruOgYIPjvLAHcAbwJHY9R5BHgDWInFNDKXC/154IYAMVYhacAmLtwHgE1YGHm4Gt7lkYmDHw8gIxDT8RwEVgf0LBKvWmhEqU4Dd/vE1YBMTGzH9hGSSK+dNgeNeconphtxu9vzF8G6tFAsttyIdrxXE1eTjGzVQeD+wC4GoAJZJrURfB/jF3NKWYvZ2zLCahhoCWpkELZZCnyjRwwrkZwL1+aWagi4LaiRftxuIeBO5IaiiWgE+i3EEFXHkMlQbDLIRqXJYFU/wUpkXdm1mX76DE2Tm8cNBvkP6gnBOoP16tba4HaqmY65i+IrijqrKa/86240Jd20GgpwoeX6TEpL0k0W2TvTGVgO9bg5ibfQ+WlfcDu9WYzeCcNbinrma6zDtppU5oW5Wn4DPB/i/X50KI6v0liHbZSxhx2WvAx8Ei+Ws/yoOH6NpvJdoDX2GiRh29TPTEfZieunowy088BdyDptHPoVx+tiluuSehOF1iE//6jfvmqikqRN4bA6qTIrztSxB7gFme9HQbXZWohYXhJQxh53jl4LXBDxs6qZ1PGI5SUBVXcY2+hWomfGz1Ic74lYXhJQ5v3FMfpSYH2MzzcqjmvJ3nTET6oX4hi9Fbn/MCoLFMf3xCjTNbt0F6hj0edtRdnzNJTtSlo2AUa4lXBbS/3AM8AHjB+6daHu3zsiNtSltJ7NKwi3tbST8c/DmIEsJ76HpF+p7r1eH6KOpOihYBb600Lw1btjwGN4XwMyqJ9LVw38GbCuJOg31PueodiCTDD8KswjF8mZGup8OEB9SZG2lLE+n4r2Imewzie5ZJCNT9cm+qldY5t5CUmjPYqkB+wAXkM2JeforKiEufh/yS51mDJ62pgfK0hmAs0pDOThuaaFZD39Zgi4x2iLHdJMMpIcC8idBZOa5dhLvPTSCWC24bY6px74EPdmv2O6oUmhGfcPbVljvJUJYRrwCOYTMVX6D7jJeCsTRAbJVd6GJE5GNS4HvA58HeIz/cD1fgGW7UOrPahEnkqwDMnta0QWtmqRhE2Qi1kvcldXJ5IctBt53HGhWEYrMlELslV3Epm8vaurEVON2UjGa5DZ6Rnkn0ekxKAGubnTL7mnV1XAZOw6TNOIXACXIgmZDchiWhWycpme1SkpKSkpKSkO+R8lAjJ+DOJWMwAAAABJRU5ErkJggg=="
              />
            </div>
            {/* Credit: <a href="https://icons8.com/icon/59753/chat">Chat icon by Icons8</a> */}
            <button>Discuss</button>
          </Link>
        </div>
        <div className="nav-button col">
          <Link to="/exchange">
            <div>
              <img
                className="nav-button-icon"
                alt="exchange"
                src="data:image/png;base64,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"
              />
            </div>
            {/* Credit: <a href="https://icons8.com/icon/60008/synchronize">Synchronize icon by Icons8</a> */}
            <button>Exchange</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Footer;
