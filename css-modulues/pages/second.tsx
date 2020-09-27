import Link from "next/link";
import s from "../src/css/second.module.scss";
import cn from "classnames";
import { Fragment } from "react";

const SecondPage = () => (
  <>
    <h1>Second Page (CSS Modules)</h1>
    <div className={cn(s.box, s.mb_10)}>
      <Link href="/">
        <a>Go First</a>
      </Link>
    </div>
    <div className={cn(s.flex, s.main)}>
      {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15].map(number => (
        <Fragment key={number}>
          <div className={cn(s.flex, s.p_6, s.mb_20, s.first_row)}>
            <div className={cn(s.flex, s.wrapper1, s.p_10)}>
              <div className={cn(s.box, "bg_red3")} />
              <div className={cn(s.box, "bg_blue2")} />
            </div>
            <div className={cn(s.flex, s.p_10, s.wrapper2)}>
              <div className={cn(s.box, "bg_pink", s.mr_10)} />
              <div className={cn(s.box, "bg_green")} />
            </div>
            <div className={cn(s.flex, s.p_8, s.wrapper3)}>
              <div className={cn(s.box, "bg_pink")} />
              <div className={cn(s.box, "bg_pink", s.border_lightGrey2_1)} />
              <div className={cn(s.box, "bg_pink", s.border_lightGrey4_1)} />
            </div>
            <div className={cn(s.flex, s.p_4, s.wrapper4)}>
              <div className={cn(s.box, "bg_yellow1", s.flex_110)} />
              <div className={cn(s.box, "bg_yellow2", s.flex_110)} />
              <div
                className={cn(
                  s.box,
                  "bg_yellow3",
                  s.flex_01f,
                  s.border_green_1
                )}
              />
              <div className={cn(s.box, "bg_yellow4", s.flex_110)} />
              <div className={cn(s.box, "bg_yellow5", s.flex_110)} />
              <div
                className={cn(
                  s.box,
                  "bg_yellow1",
                  s.flex_110,
                  s.border_orange_1
                )}
              />
            </div>
          </div>
          <div className={cn(s.flex, s.mb_16, s.second_row)}>
            <div
              className={cn(s.flex, s.flex_10a, s.mr_10, s.p_10, s.wrapper1)}
            >
              <button className={cn("btn_pink_green", s.p_10)}>
                <div className={cn(s.text, "black1")}>Button</div>
              </button>
              <button className={cn("btn_blue1_lightGrey2", s.p_4)}>
                <div className={cn(s.text, "white")}>Button</div>
              </button>
              <button className="btn_green_transparent">
                <div className={cn(s.text, "grey1")}>Button</div>
              </button>
              <button className="btn_red3_transparent">
                <div className={cn(s.text, "white")}>Button</div>
              </button>
              <button className="btn_red4_transparent">
                <div className={cn(s.text, "white", s.py_20)}>Button</div>
              </button>
            </div>
            <div className={cn(s.flex, s.flex_10a, s.p_10, s.wrapper2)}>
              <button className={cn("btn_black1_red2", s.m_5)}>
                <div className={cn(s.text, "white")}>Button</div>
              </button>
              <button
                className="btn_black1_orange"
                style={{ marginLeft: "100px" }}
              >
                <div className={cn(s.text, "white")}>Button</div>
              </button>
              <button className="btn_lightGrey1_black2">
                <div className={cn(s.text, "grey1", s.mr_10)}>Button</div>
              </button>
              <button
                className="btn_lightGrey3_blue3"
                style={{ marginRight: "100px" }}
              >
                <div className={cn(s.text, "grey2")}>Button</div>
              </button>
              <button className="btn_lightGrey3_white">
                <div className={cn(s.text, "black1")}>Button</div>
              </button>
            </div>
          </div>
          <div className={cn(s.flex, s[`third_row_${number}`], s.mb_20)}>
            <div className={cn(s.flex, s.m_10, s.p_0, s.third_wrapper1)}>
              <button className={cn("btn_white_lightGrey1", s.p_10)}>
                <div className={cn(s.text, "pink")}>Button</div>
              </button>
              <button className={cn("btn_white_black2", s.p_4)}>
                <div className={cn(s.text, "green")}>Button</div>
              </button>
              <button className="btn_white_lightGrey2">
                <div className={cn(s.text, "black2")}>Button</div>
              </button>
            </div>
            <div className={cn(s.flex, s.m_5, s.p_5, s.third_wrapper2)}>
              <button className="btn_red4_blue2">
                <div className={cn(s.text, "black2")}>Button</div>
              </button>
              <button className={cn("btn_yellow1_blue2", s.pb_12)}>
                <div className={cn(s.text, "grey1")}>Button</div>
              </button>
            </div>
            <div className={cn(s.flex, s.m_6, s.p_10, s.third_wrapper3)}>
              <button className="btn_yellow1_black2">
                <div className={cn(s.text, "grey1")}>Button</div>
              </button>
              <button className="btn_yellow1_lightGrey3">
                <div className={cn(s.text, "grey2", s.p_6)}>Button</div>
              </button>
              <button className="btn_yellow1_green">
                <div className={cn(s.text, "grey3")}>Button</div>
              </button>
              <button className="btn_yellow3_black2">
                <div className={cn(s.text, "grey4", s.pb_4)}>Button</div>
              </button>
            </div>
          </div>
        </Fragment>
      ))}
    </div>
  </>
);

export default SecondPage;
