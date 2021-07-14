import React from 'react'

function PdInfoPad() {
  return (
    <>
      <div className="item-content-top container-fluid">
        <div className="row item-content-point text-left justify-content-around align-item-center">
          <div className="pad-img col-12 col-md-6 ">
            <img src="/img/Product/pd-i-00.png" alt="" />
          </div>
          <div className="col-12 col-md-6 my-auto pl-5">
            <div className="underline">
              <h4>Selected With Care</h4>
              <h6 className="h6-tc">嚴選素材無添加</h6>
            </div>
            <div className="mt-4">
              <p>
                <span>1. </span>無化學染料
              </p>
              <p>
                <span>2. </span>無甲醛
              </p>
              <p>
                <span>3. </span>無防腐劑
              </p>
              <p>
                <span>4. </span>無化學香料
              </p>
              <p>
                <span>5. </span>無遷移性螢光增白劑
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="item-content-sec container-fluid">
        <div className="row flex-column text-left">
          <h4>Naturally Powerful</h4>
          <h6 className="h6-tc">100% 有機棉</h6>
          <p>
            經過皮膚病學測試
            <br />
            透氣、低過敏性的 100% 有機棉。
          </p>
        </div>
      </div>
      <div className="item-content container-fluid">
        <div className="row justify-content-between text-left ">
          <div className="col-12 col-md-6">
            <h4>New Ultra Thin</h4>
            <h6 className="h6-tc">安心吸收保證</h6>
            <p>
              全新超薄吸收層
              <br />
              長達 8 小時的安心保護
              <br />
              快速吸收通道將液體吸入儲存層，
              <br />
              防漏屏障提供持久保護。
            </p>
          </div>
          <div className="thin-img col-12 col-md-6">
            <img src="/img/Product/pd-i-01.jpg" alt="" />
          </div>
        </div>
        <div className="row naked-truth  justify-content-between text-left">
          <div className="col-12 col-md-6">
            <div className="coner-img1">
              <img src="/img/Product/pd-i-03.jpg" alt="" />
            </div>
            <div className="coner-img2">
              <img src="/img/Product/pd-i-02.jpg" alt="" />
            </div>
          </div>
          <div className="col-12 col-md-6">
            <h4>The Naked Truth</h4>
            <h6>親膚少刺激</h6>
            <p>
              舒適以上的體感
              <br />
              超吸水絨面膚觸柔軟，
              <br />
              可自由活動並保持原位，清爽零感覺。
            </p>
          </div>
          <div className="bg-white col-12"></div>
        </div>
      </div>
    </>
  )
}

export default PdInfoPad
