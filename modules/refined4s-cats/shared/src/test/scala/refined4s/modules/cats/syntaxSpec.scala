package refined4s.modules.cats

import cats.*
import cats.syntax.all.*
import extras.core.syntax.all.*
import hedgehog.*
import hedgehog.runner.*
import refined4s.*
import refined4s.InlinedRefinedType.MoreThan2CharsString
import refined4s.modules.cats.syntax.*

/** @author Kevin Lee
  * @since 2023-12-06
  */
object syntaxSpec extends Properties {
  override def tests: List[Test] = RefinedNewtypeNec.tests

  object RefinedNewtypeNec {

    def tests: List[Test] = List(
      ///
      property(
        "For type T = Refined[A] and type N = NewType[T], a.refinedNewtypeNec[N] with a valid `a` should return EitherNec[String, N] = Right(N)",
        testARefinedNewtypeNecT,
      ),
      example(
        "For type T = Refined[A] and type N = NewType[T], a.refinedNewtypeNec[N] with an invalid `a` should return EitherNec[String, N] = Left(String)",
        testARefinedNewtypeNecTInvalid,
      ),
      property(
        "For type T = Refined[A] and type N = NewType[T], refinedNewtypeNec(a)[N] with a valid `a` should return EitherNec[String, N] = Right(N)",
        testRefinedNewtypeNecTA,
      ),
      example(
        "For type T = Refined[A] and type N = NewType[T], refinedNewtypeNec(a)[N] with an invalid `a` should return EitherNec[String, N] = Left(String)",
        testRefinedNewtypeNecTAInvalid,
      ),
      ///
      property(
        "For type T = InlinedRefined[A] and type N = NewType[T], a.refinedNewtypeNec[N] with a valid `a` should return EitherNec[String, N] = Right(N)",
        testInlinedRefined_ARefinedNewtypeNecT,
      ),
      property(
        "For type T = InlinedRefined[A] and type N = NewType[T], a.refinedNewtypeNec[N] with an invalid `a` should return EitherNec[String, N] = Left(String)",
        testInlinedRefined_ARefinedNewtypeNecTInvalid,
      ),
      property(
        "For type T = InlinedRefined[A] and type N = NewType[T], refinedNewtypeNec(a)[N] with a valid `a` should return EitherNec[String, N] = Right(N)",
        testInlinedRefined_RefinedNewtypeNecTA,
      ),
      property(
        "For type T = InlinedRefined[A] and type N = NewType[T], refinedNewtypeNec(a)[N] with an invalid `a` should return EitherNec[String, N] = Left(String)",
        testInlinedRefined_RefinedNewtypeNecTAInvalid,
      ),
    )

    def testARefinedNewtypeNecT: Property =
      for {
        s <- Gen.string(Gen.unicode, Range.linear(1, 10)).log("s")
      } yield {

        val expected = NewMyType(MyType.unsafeFrom(s)).rightNec[String]
        val actual   = s.refinedNewtypeNec[NewMyType]
        actual ==== expected
      }

    def testARefinedNewtypeNecTInvalid: Result = {
      val expected =
        "Failed to create refined4s.modules.cats.syntaxSpec.NewMyType: Invalid value: []. It has to be a non-empty String but got \"\""
          .leftNec[NewMyType]
      val actual   = "".refinedNewtypeNec[NewMyType]
      actual ==== expected
    }

    def testRefinedNewtypeNecTA: Property =
      for {
        s <- Gen.string(Gen.unicode, Range.linear(1, 10)).log("s")
      } yield {

        val expected = NewMyType(MyType.unsafeFrom(s)).rightNec[String]
        val actual   = refinedNewtypeNec(s)[NewMyType]
        actual ==== expected
      }

    def testRefinedNewtypeNecTAInvalid: Result = {
      val expected =
        "Failed to create refined4s.modules.cats.syntaxSpec.NewMyType: Invalid value: []. It has to be a non-empty String but got \"\""
          .leftNec[NewMyType]
      val actual   = refinedNewtypeNec("")[NewMyType]
      actual ==== expected
    }

    def testInlinedRefined_ARefinedNewtypeNecT: Property =
      for {
        s <- Gen.string(Gen.unicode, Range.linear(3, 10)).log("s")
      } yield {

        val expected = NewMoreThan2CharsString(MoreThan2CharsString.unsafeFrom(s)).rightNec[String]
        val actual   = s.refinedNewtypeNec[NewMoreThan2CharsString]
        (actual ==== expected).log(
          raw"""       s: ${s.encodeToUnicode}
               |  actual: ${actual.leftMap(_.map(_.encodeToUnicode))}
               |expected: ${expected.leftMap(_.map(_.encodeToUnicode))}
               |""".stripMargin
        )
      }

    def testInlinedRefined_ARefinedNewtypeNecTInvalid: Property =
      for {
        s <- Gen.string(Gen.unicode, Range.linear(0, 2)).log("s")
      } yield {
        val expected =
          s"Failed to create refined4s.modules.cats.syntaxSpec.NewMoreThan2CharsString: Invalid value: [$s]. The String should have more than 2 chars but got $s instead"
            .leftNec[NewMoreThan2CharsString]

        val actual = s.refinedNewtypeNec[NewMoreThan2CharsString]
        (actual ==== expected).log(
          raw"""       s: ${s.encodeToUnicode}
               |  actual: ${actual.leftMap(_.map(_.encodeToUnicode))}
               |expected: ${expected.leftMap(_.map(_.encodeToUnicode))}
               |""".stripMargin
        )
      }

    def testInlinedRefined_RefinedNewtypeNecTA: Property =
      for {
        s <- Gen.string(Gen.unicode, Range.linear(3, 10)).log("s")
      } yield {

        val expected = NewMoreThan2CharsString(MoreThan2CharsString.unsafeFrom(s)).rightNec[String]
        val actual   = refinedNewtypeNec(s)[NewMoreThan2CharsString]
        (actual ==== expected).log(
          raw"""       s: ${s.encodeToUnicode}
               |  actual: ${actual.leftMap(_.map(_.encodeToUnicode))}
               |expected: ${expected.leftMap(_.map(_.encodeToUnicode))}
               |""".stripMargin
        )
      }

    def testInlinedRefined_RefinedNewtypeNecTAInvalid: Property =
      for {
        s <- Gen.string(Gen.unicode, Range.linear(0, 2)).log("s")
      } yield {
        val expected =
          s"Failed to create refined4s.modules.cats.syntaxSpec.NewMoreThan2CharsString: Invalid value: [$s]. The String should have more than 2 chars but got $s instead"
            .leftNec[NewMoreThan2CharsString]
        val actual   = refinedNewtypeNec(s)[NewMoreThan2CharsString]
        (actual ==== expected).log(
          raw"""       s: ${s.encodeToUnicode}
               |  actual: ${actual.leftMap(_.map(_.encodeToUnicode))}
               |expected: ${expected.leftMap(_.map(_.encodeToUnicode))}
               |""".stripMargin
        )
      }
  }

  type MyType = MyType.Type
  @SuppressWarnings(Array("org.wartremover.warts.Equals"))
  object MyType extends Refined[String] {

    override inline def invalidReason(a: String): String =
      "It has to be a non-empty String but got \"" + a + "\""

    override inline def predicate(a: String): Boolean = a != ""

    given eqMyType: Eq[MyType] = deriving[Eq]

    given showMyType: Show[MyType] = deriving[Show]
  }

  type NewMyType = NewMyType.Type
  object NewMyType extends Newtype[MyType]

  type NewMoreThan2CharsString = NewMoreThan2CharsString.Type
  object NewMoreThan2CharsString extends Newtype[MoreThan2CharsString]
}
