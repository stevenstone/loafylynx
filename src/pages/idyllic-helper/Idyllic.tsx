import { useState, type FC, type JSX } from "react";
import "./idyllic.css";

type Position = "NW" | "N" | "NE" | "E" | "SE" | "S" | "SW" | "W";

const tetherHelp: Record<string, JSX.Element> = {
    NW: <>top left buddies <br />second defam <br />stack 4<br />defam NW</>,
    W: <>bottom left buddies<br />first defam<br />defam NW <br />stack 4</>,
    SW: <>bottom right buddies<br />second defam<br />stack 2<br />defam NE</>,
    S: <>top right buddies<br />first defam<br />defam NE<br />stack 2</>,
    SE: <>STACK<br />top left buddies<br />stack 4</>,
    E: <>STACK<br />bottom left buddies<br />stack 4</>,
    NE: <>STACK<br />bottom right buddies<br />stack 2</>,
    N: <>STACK<br />top right buddies<br />stack 2</>,
}

export const Idyllic: FC = () => {
    const [firstClones, setFirstClones] = useState<"cardinal" | "intercardinal">();
    const [clonePosition, setClonePosition] = useState<Position>();
    const [coneZone, setConeZone] = useState<"north" | "south">();
    const [stackOrDefamFirst, setStackOrDefamFirst] = useState<"stack" | "defam">();
    const [towerPosition, setTowerPosition] = useState<"left" | "right">();
    const [blackHoleSafe, setBlackHoleSafe] = useState<"NS" | "EW">();
    const [safePlatform, setSafePlatform] = useState<"E" | "W">();

    return (
        <div className="idyllic">
            <div className="half">
                <h2>Remember!</h2>
                <fieldset>
                    <legend>Clones and Tethers 1</legend>

                    <p>Player Clone</p>
                    <button type="button" className={firstClones === "cardinal" ? "active" : ""} onClick={() => setFirstClones("cardinal")}>Cardinal</button>
                    <button type="button" className={firstClones === "intercardinal" ? "active" : ""} onClick={() => setFirstClones("intercardinal")}>Intercardinal</button>
                    <hr />

                    <p>Clone Position</p>
                    <div className="clock-buttons">
                        <button type="button" data-pos="N" className={clonePosition === "N" ? "active" : ""} onClick={() => setClonePosition("N")}>N</button>
                        <button type="button" data-pos="NE" className={clonePosition === "NE" ? "active" : ""} onClick={() => setClonePosition("NE")}>NE</button>
                        <button type="button" data-pos="E" className={clonePosition === "E" ? "active" : ""} onClick={() => setClonePosition("E")}>E</button>
                        <button type="button" data-pos="SE" className={clonePosition === "SE" ? "active" : ""} onClick={() => setClonePosition("SE")}>SE</button>
                        <button type="button" data-pos="S" className={clonePosition === "S" ? "active" : ""} onClick={() => setClonePosition("S")}>S</button>
                        <button type="button" data-pos="SW" className={clonePosition === "SW" ? "active" : ""} onClick={() => setClonePosition("SW")}>SW</button>
                        <button type="button" data-pos="W" className={clonePosition === "W" ? "active" : ""} onClick={() => setClonePosition("W")}>W</button>
                        <button type="button" data-pos="NW" className={clonePosition === "NW" ? "active" : ""} onClick={() => setClonePosition("NW")}>NW</button>
                    </div>
                    {clonePosition && (
                        <div className="tether-help">{tetherHelp[clonePosition]}</div>
                    )}
                    <hr />

                    <p>Cone Safe Spot</p>
                    <button type="button" className={coneZone === "north" ? "active" : ""} onClick={() => setConeZone("north")}>North</button>
                    <button type="button" className={coneZone === "south" ? "active" : ""} onClick={() => setConeZone("south")}>South</button>
                    <hr />

                    <p>North Clone Stack or Defam</p>
                    <button type="button" className={stackOrDefamFirst === "stack" ? "active" : ""} onClick={() => setStackOrDefamFirst("stack")}>Stack</button>
                    <button type="button" className={stackOrDefamFirst === "defam" ? "active" : ""} onClick={() => setStackOrDefamFirst("defam")}>Defam</button>
                </fieldset>

                <fieldset>
                    <legend>Platforms and Towers 1</legend>
                    <p>Tower Spot</p>
                    <button type="button" className={towerPosition === "left" ? "active" : ""} onClick={() => setTowerPosition("left")}>Left</button>
                    <button type="button" className={towerPosition === "right" ? "active" : ""} onClick={() => setTowerPosition("right")}>Right</button>
                </fieldset>

                {/* <fieldset>
                <legend>Clones and Tethers 2</legend>
            </fieldset>

            <fieldset>
                <legend>Platforms and Towers 2</legend>
            </fieldset> */}

                <fieldset>
                    <legend>Black Holes and Revelations</legend>
                    <p>Black Hole Clone Safe Spot</p>
                    <button type="button" className={blackHoleSafe === "NS" ? "active" : ""} onClick={() => setBlackHoleSafe("NS")}>N/S</button>
                    <button type="button" className={blackHoleSafe === "EW" ? "active" : ""} onClick={() => setBlackHoleSafe("EW")}>E/W</button>

                    <p>Other Clone Platform</p>
                    <button type="button" className={safePlatform === "W" ? "active" : ""} onClick={() => setSafePlatform("W")}>N/S</button>
                    <button type="button" className={safePlatform === "E" ? "active" : ""} onClick={() => setSafePlatform("E")}>E/W</button>
                </fieldset>
            </div>

            {/* <div className="half">
                <h2>Recall!</h2>
                <fieldset>
                    <legend>Clones and Tethers 1</legend>
                    <dl>
                        <dt>Cones Resolve</dt>
                        <dd>Go {coneZone} with your light party</dd>
                    </dl>
                </fieldset>

                <fieldset>
                    <legend>Clones and Tethers 2</legend>
                    <dl>
                        <dt>Stack or Defam First?</dt>
                        <dd>{stackOrDefamFirst}</dd>
                    </dl>
                </fieldset>

                <fieldset>
                    <legend>Platforms and Towers 2</legend>
                    <dl>
                        <dt>Tower Spot</dt>
                        <dd>{towerPosition}</dd>
                    </dl>
                </fieldset>

                <fieldset>
                    <legend>Black Holes and Revelations</legend>
                    <dl>
                        <dt>Clone Spawns</dt>
                        <dd>{clonePosition}</dd>
                    </dl>
                    <dl>
                        <dt>1st Defam/Stack</dt>
                        <dd>{stackOrDefamFirst} first</dd>
                    </dl>
                    <dl>
                        <dt>Platform + Cone</dt>
                        <dd>{blackHoleSafe}</dd>
                    </dl>
                    <dl>
                        <dt>Black Hole Clone Resolves</dt>
                        <dd>{safePlatform}</dd>
                    </dl>
                </fieldset>
            </div> */}
        </div>
    );
}